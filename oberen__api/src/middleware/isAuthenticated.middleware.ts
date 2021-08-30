import { ApolloError } from "apollo-server-express";
import { createMethodDecorator } from "type-graphql";
import { Context } from "../types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../resolver-types/models";

dotenv.config();

export const IsAuthenticated = (): any => {
  return createMethodDecorator<Context>(
    async ({ context: { req, prisma } }, next) => {
      const token = req.headers.authorization?.split(" ");
      if (!token) {
        throw new ApolloError("Not Authenticated.", "401");
      }

      const tokenType = token[0];
      const accessToken = token[1];

      console.log(tokenType.toLowerCase());
      console.log(typeof tokenType);

      if (tokenType.toLowerCase() !== "bearer") {
        throw new ApolloError("Not Authenticated.", "not_authenticated");
      }

      const decodedData = jwt.verify(
        accessToken,
        process.env.JWT_SECRET as string
      );

      req.user = decodedData as User;

      return next();

      // const tokenPair = await prisma.tokenPair.findUnique({
      //   where: {
      //     accessToken,
      //   },
      //   include: {
      //     user: {
      //       include: {
      //         posts: true,
      //         likedPosts: true,
      //         createdComments: true,
      //         likedComments: true,
      //         oauthConnections: true,
      //         profile: true,
      //       },
      //     },
      //   },
      // });
      // if (!tokenPair) {
      //   throw new ApolloError("Not Authenticated", "401");
      // }
      // if (tokenPair.user.isLocal) {
      //   req.user = tokenPair.user as any;
      //   next();
      // }
      // // Check if token exceeds 8 hours
      // req.user = tokenPair.user as any;
      // next();
    }
  );
};
