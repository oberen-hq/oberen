// IMPORTS

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { ApolloError } from "apollo-server-express";
import { createMethodDecorator, NonEmptyArray } from "type-graphql";
import { Context } from "../types";

// CODE

dotenv.config();

/**
 * Authentication middleware
 *
 * @description This is the authentication middleware for a user doing any act that requires a user
 * @returns {None}
 *
 * **/

export const IsAuthenticated = (): any => {
  return createMethodDecorator<Context>(
    async ({ context: { req, prisma } }, next) => {
      // Parse the token from authorization header
      const token = req.headers.authorization?.split(" ")[1];
      // Fetch the access secret from environment
      const accessSecret = process.env.ACCESS_SECRET as string;

      if (!token)
        throw new ApolloError("Not authenticated", "not_authenticated");

      // Find an existing token pair from the token
      const tokenPair = await prisma.tokenPair.findUnique({
        where: {
          accessToken: token,
        },
        include: {
          user: {
            include: {
              sessions: true,
              profile: true,
              followers: true,
              following: true,
              errors: true,
            },
          },
        },
      });

      if (!tokenPair) {
        throw new ApolloError("Not authenticated", "not_authenticated");
      }

      // Check if the token is valid, if not session must be reset by a request on the frontend to refresh the token
      await jwt.verify(token, accessSecret);

      req.user = tokenPair.user as any; // Set the session user
      return next();
    },
  );
};
