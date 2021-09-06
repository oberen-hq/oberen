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

  // This is the function for registering a user

  create = async (
    userData: RegisterUserDataType,
  ): Promise<UserResponse | ApolloError> => {
    return executeOrFail(async () => {
      const existingUser = await this.user.findFirst({
        // Find the existing user with the email provided in userData
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

      // If the user exists, we throw an error

      if (existingUser) {
        throw new ApolloError("User already exists!", "already_exists");
      }

      // Password encryption using the bcryptjs library

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password as any, salt);

      // Creating the user, including all relations to be stored in the access token

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

      // Generate a token pair using the user for the data parameter

      const tokens: any = await tokenUtil.generateTokenPair(user);

      // Return an access token aswell as the user

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

  // This is the function for signing in a user

  login = async (userData: LoginUserDataType): Promise<UserResponse> => {
    return executeOrFail(async () => {
      const user = await this.user.findFirst({
        // Find the user from the provided email in userData
        where: {
          email: userData.email,
        },
      });

      let correctPassword;

      // Check if a user exists based on the email

      if (user) {
        // Check if it's the correct password

        correctPassword = await bcrypt.compare(
          userData.password,
          user.password as string,
        );
      } else {
        // Throw an error that a user doesn't exist

        throw new ApolloError(
          "User with that email does not exist",
          "user_doesn't_exist",
        );
      }

      if (!correctPassword) {
        throw new ApolloError("Incorrect password", "invalid_credentials");
      }

      const existingToken = await this.tokenPair.findFirst({
        // Find an existing token pair based of the user id
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
        // If the token doesn't exist, increase the count of times generating a new refresh token

        const tokens: any = await tokenUtil.generateTokenPair(user);

        await this.$executeRaw(
          `UPDATE "User" set count = count + 1 WHERE id = ${user.id}`,
        );

        return {
          accessToken: ("Bearer " + tokens.accessToken) as string,
          user: user,
        };
      } else {
        // Generate a new token pair

        const tokens: any = await tokenUtil.generateTokenPair(user);

        // Delete the old token pair

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

  // This is the function for finding a user by an id

  findById = async (userId: string): Promise<User | ApolloError> => {
    return executeOrFail(async () => {
      const user = await this.user.findFirst({
        // Find the user id based of the userId argument
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

  // This is the function for finding a user by name

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
