import { PrismaClient } from "@prisma/client";
import { User } from "../resolver-types/models/";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { massOptions } from "./types";
import { UserResponse } from "../resolvers/User/responses/User.response";
import { RegisterUserDataType, LoginUserDataType } from "./types";

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
        throw new ApolloError(err.message, "internal_server_error");
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
        throw new ApolloError(
          "User with that email does not exist",
          "user_doesn't_exist"
        );
      }

      if (!correctPassword) {
        throw new ApolloError("Incorrect password", "invalid_credentials");
      }

      try {
        token = await jwt.sign(user, process.env.JWT_SECRET as string, {
          expiresIn: "8h",
        });
      } catch (err) {
        throw new ApolloError(err.message, "internal_server_error");
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
        throw new ApolloError("That user does not exist", "user_doesn't_exist");
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
