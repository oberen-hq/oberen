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
          sessions: {
            create: [
              {
                provider: userData.provider,
                device: userData.device,
                userAgent: userData.userAgent,
                ip: userData.ip,
              },
            ],
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
        refreshToken: ("Bearer " + tokens.refreshToken) as string,
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
        // Find the user from the provided email in userData
        where: {
          email: userData.email,
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

      // Check if user exists

      if (!user) {
        throw new ApolloError(
          "User with that email does not exist",
          "user_doesn't_exist",
        );
      }

      // Check if it is the correct password

      const correctPassword = await bcrypt.compare(
        userData.password,
        user.password as string,
      );

      if (!correctPassword) {
        throw new ApolloError("Incorrect password", "invalid_credentials");
      }

      // Generate tokens

      const tokens: any = await tokenUtil.generateTokenPair(user);

      // Update count for how many times logged in

      await this.$executeRaw(
        `UPDATE "User" set count = count + 1 WHERE id = ${user.id}`,
      );

      // TODO: Update user session

      return {
        accessToken: ("Bearer " + tokens.accessToken) as string,
        refreshToken: ("Bearer" + tokens.refreshToken) as string,
        user: user,
      };
    });
  };

  /**
   * Find a user by id
   *
   * @param   userId
   * @returns {user} A user based of their id
   *
   * **/

  findById = async (userId: string): Promise<User | ApolloError> => {
    return executeOrFail(async () => {
      const user = await this.user.findFirst({
        // Find the user id based of the userId argument
        where: {
          id: userId,
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

      if (user) {
        return user;
      } else {
        throw new ApolloError("That user does not exist", "user_doesn't_exist");
      }
    });
  };

  /**
   * Find a user by name
   *
   * @param   username
   * @returns {user} A user based of their name
   *
   * **/

  findByName = async (username: string): Promise<User | ApolloError> => {
    return executeOrFail(async () => {
      const user = await this.user.findFirst({
        // Find the user based of the username argument
        where: {
          username: username,
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

      if (user) {
        return user;
      } else {
        throw new ApolloError("That user doesn't exist", "user_doesn't_exist");
      }
    });
  };

  /**
   * Find all users
   *
   * @param   userOptions
   * @returns {[user]} A list of users
   *
   * **/

  findInMass = async (
    userOptions: massOptions,
  ): Promise<User[] | ApolloError> => {
    return executeOrFail(async () => {
      const users = await this.user.findMany({
        // Find a specific, and refined user amount based of the userOptions argument
        skip: userOptions?.skip,
        take: userOptions?.limit,
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

      if (users) {
        return users;
      } else {
        throw new ApolloError("No users were found", "no_data");
      }
    });
  };
}
