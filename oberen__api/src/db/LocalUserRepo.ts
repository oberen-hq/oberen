import { PrismaClient } from "@prisma/client";
import { User } from "../resolver-types/models";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { massOptions } from "./types";
import { UserResponse } from "../resolvers/User/responses/User.response";
import { RegisterUserDataType, LoginUserDataType } from "./types";

import Token from "../utils/token";

const tokenGen = new Token();

dotenv.config();

export default class LocalUserRepo extends PrismaClient {
  create = async (
    userData: RegisterUserDataType
  ): Promise<UserResponse | ApolloError> => {
    return executeOrFail(async () => {
      const existingUser = await this.user.findFirst({
        where: {
          OR: [
            {
              email: userData.email,
            },
            {
              username: userData.username,
            },
          ],
        },
        select: {
          email: true,
          username: true,
        },
      });

      if (existingUser) {
        throw new ApolloError("User already exists!", "already_exists");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password as any, salt);
      const user = await this.user.create({
        data: {
          username: userData.username,
          email: userData.email,
          password: hashedPassword,
          isLocal: userData.isLocal,
          profile: {
            create: {
              avatarURL: userData.avatarURL,
              bio: userData.bio,
            },
          },
        },
      });

      const accessSecret = process.env.ACCESS_SECRET as string;
      const refreshSecret = process.env.REFRESH_SECRET as string;

      const [accessToken, refreshToken] = await tokenGen.createTokens(
        user,
        accessSecret,
        user.password + refreshSecret
      );

      const tokenPair = await this.tokenPair.create({
        data: {
          accessToken: accessToken,
          refreshToken: refreshToken,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      return {
        accessToken: `Bearer  ${accessToken}`,
        user: user,
      };
    });
  };

  login = async (userData: LoginUserDataType): Promise<UserResponse> => {
    return executeOrFail(async () => {
      const user = await this.user.findFirst({
        where: {
          email: userData.email,
        },
      });

      let correctPassword;

      if (user) {
        correctPassword = await bcrypt.compare(
          userData.password,
          user.password as string
        );
      } else {
        throw new ApolloError(
          "User with that email does not exist",
          "user_doesn't_exist"
        );
      }

      if (!correctPassword) {
        throw new ApolloError("Incorrect password", "invalid_credentials");
      }

      const accessSecret = process.env.ACCESS_SECRET as string;
      const refreshSecret = process.env.REFRESH_SECRET as string;

      const [accessToken, refreshToken] = await tokenGen.createTokens(
        user,
        accessSecret,
        user.password + refreshSecret
      );

      const existingToken = await this.tokenPair.findFirst({
        where: {
          userId: user.id,
        },
      });

      if (!existingToken) {
        await this.tokenPair.create({
          data: {
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: {
              connect: {
                id: user.id,
              },
            },
          },
        });

        await this.$executeRaw(
          `UPDATE "User" set count = count + 1 WHERE id = ${user.id}`
        );

        return {
          accessToken: `Bearer  ${accessToken}`,
          user: user,
        };
      } else {
        await this.tokenPair.update({
          where: {
            refreshToken: existingToken.refreshToken,
          },
          data: {
            accessToken: accessToken,
          },
        });

        return {
          accessToken: `Bearer  ${accessToken}`,
          user: user,
        };
      }
    });
  };

  findById = async (userId: string): Promise<User | ApolloError> => {
    return executeOrFail(async () => {
      const user = await this.user.findFirst({
        where: {
          id: userId,
        },
        include: {
          profile: true,
        },
      });

      if (user) {
        return user;
      } else {
        throw new ApolloError("That user does not exist", "user_doesn't_exist");
      }
    });
  };

  findByName = async (username: string): Promise<User | ApolloError> => {
    return executeOrFail(async () => {
      const user = await this.user.findFirst({
        where: {
          username: username,
        },
        include: {
          profile: true,
        },
      });

      if (user) {
        return user;
      } else {
        throw new ApolloError("That user doesn't exist", "user_doesn't_exist");
      }
    });
  };

  findInMass = async (
    userOptions: massOptions
  ): Promise<User[] | ApolloError> => {
    return executeOrFail(async () => {
      const users = await this.user.findMany({
        skip: userOptions?.skip,
        take: userOptions?.limit,
      });

      if (users) {
        return users;
      } else {
        throw new ApolloError("No users were found", "no_data");
      }
    });
  };
}
