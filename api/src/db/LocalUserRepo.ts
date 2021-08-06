import { PrismaClient } from "@prisma/client";
import { User } from "../resolver-types/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { userOptions } from "./types";
import { LocalUserResponse } from "~/resolvers/User/responses/User.response";
import { UserDataType } from "./types/index";

dotenv.config();

export default class LocalUserRepo extends PrismaClient {
  createUser = async (
    userData: UserDataType
  ): Promise<LocalUserResponse | ApolloError> => {
    return executeOrFail(async () => {
      const existingUser = await this.user.findFirst({
        where: {
          username: userData?.username,
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
          type: "LOCAL",
          profile: {
            create: {
              avatarUrl: userData?.avatarUrl,
              bio: userData?.bio,
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
        token,
        user,
      };
    });
  };

  findUserById = async (userId: string): Promise<User | ApolloError> => {
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

  findAllUsers = async (
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
