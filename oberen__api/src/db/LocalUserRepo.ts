// IMPORTS

import TokenPairUtil from "../utils/token/utils/TokenPair";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import { PrismaClient } from "@prisma/client";
import { User } from "../resolver-types/models";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { massOptions } from "./types";
import { UserResponse } from "../resolvers/User/responses/User.response";
import { RegisterUserDataType, LoginUserDataType } from "./types";

// CODE

dotenv.config();

const tokenUtil = new TokenPairUtil();

export default class LocalUserRepo extends PrismaClient {
  /**
   * Generate a unique access token.
   *
   * @param   userData
   * @returns {accessToken, user} The access token and the created user
   *
   * **/

  create = async (
    userData: RegisterUserDataType,
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
        include: {
          profile: true,
          sessions: true,
          ownedOrganizations: true,
          joinedOrganizations: true,
          posts: true,
          followers: true,
          following: true,
          errors: true,
        },
      });

      const tokens: any = await tokenUtil.generateTokenPair(user);

      return {
        accessToken: ("Bearer " + tokens.accessToken) as string,
        user: user,
      };
    });
  };

  /**
   * Generate a unique access token.
   *
   * @param   userData
   * @returns {accessToken, user} The access token and the user
   *
   * **/

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
          user.password as string,
        );
      } else {
        throw new ApolloError(
          "User with that email does not exist",
          "user_doesn't_exist",
        );
      }

      if (!correctPassword) {
        throw new ApolloError("Incorrect password", "invalid_credentials");
      }

      const existingToken = await this.tokenPair.findFirst({
        where: {
          userId: user.id,
        },
        include: {
          user: {
            include: {
              profile: true,
              sessions: true,
              ownedOrganizations: true,
              joinedOrganizations: true,
              posts: true,
              followers: true,
              following: true,
              errors: true,
            },
          },
        },
      });

      if (!existingToken) {
        const tokens: any = await tokenUtil.generateTokenPair(user);
        await this.$executeRaw(
          `UPDATE "User" set count = count + 1 WHERE id = ${user.id}`,
        );

        return {
          accessToken: ("Bearer " + tokens.accessToken) as string,
          user: user,
        };
      } else {
        const tokens: any = await tokenUtil.generateTokenPair(user);

        await this.tokenPair.delete({
          where: {
            refreshToken: existingToken.refreshToken,
          },
        });

        return {
          accessToken: ("Bearer " + tokens.accessToken) as string,
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
    userOptions: massOptions,
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
