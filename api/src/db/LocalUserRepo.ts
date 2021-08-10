import { PrismaClient } from "@prisma/client";
import { User } from "../resolver-types/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { userOptions } from "./types";
import { UserResponse } from "../resolvers/User/responses/User.response";
import { RegisterUserDataType, LoginUserDataType } from "./types/index";

dotenv.config();

export default class LocalUserRepo extends PrismaClient {
  create = async (
    userData: RegisterUserDataType
  ): Promise<UserResponse | ApolloError> => {
    return executeOrFail(async () => {
      const existingUser = await this.user.findMany({
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
        throw new ApolloError("User already exists!", "400");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      const user = await this.user.create({
        data: {
          username: userData.username,
          email: userData.email,
          password: hashedPassword,
          isLocal: true,
          profile: {
            create: {
              avatarUrl: userData?.avatarUrl || "",
              bio: userData?.bio || "Yet to be decided!",
            },
          },
        },
        include: {
          profile: true,
        },
      });

      let token;

      try {
        token = await jwt.sign(user, process.env.JWT_SECRET as string, {
          expiresIn: "8h",
        });
      } catch (err) {
        throw new ApolloError(err.message, err.code);
      }

      return {
        token: `Bearer  ${token}`,
        user,
      };
    });
  };

  login = async (userData: LoginUserDataType): Promise<UserResponse> => {
    return executeOrFail(async () => {
      const user = await this.user.findUnique({
        where: {
          email: userData.email,
        },
      });

      let correctPassword;
      let token;

      if (user) {
        correctPassword = await bcrypt.compare(
          userData.password,
          user.password as string
        );
      } else {
        throw new ApolloError("A user with that email does not exist!", "404");
      }

      if (!correctPassword) {
        throw new ApolloError("Invalid Credentials.", "400");
      }

      try {
        token = await jwt.sign(user, process.env.JWT_SECRET as string, {
          expiresIn: "8h",
        });
      } catch (err) {
        throw new ApolloError(err.message, err.code);
      }

      return {
        token: `Bearer ${token}`,
        user: user,
      };
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
        throw new ApolloError("That user does not exist.", "404");
      }
    });
  };

  findInMass = async (
    userOptions: userOptions
  ): Promise<User[] | ApolloError> => {
    return executeOrFail(async () => {
      const users = await this.user.findMany({
        skip: userOptions?.skip,
        take: userOptions?.limit,
      });

      if (users) {
        return users;
      } else {
        throw new ApolloError("Error finding users.", "500");
      }
    });
  };
}
