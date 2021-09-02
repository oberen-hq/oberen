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
      const token = req.headers.authorization?.split(" ")[1];
      const accessSecret = process.env.ACCESS_SECRET as string;

      if (!token)
        throw new ApolloError("Not authenticated", "not_authenticated");

      const tokenPair = await prisma.tokenPair.findUnique({
        where: {
          accessToken: token,
        },
        include: {
          user: true,
        },
      });

      if (!tokenPair) {
        console.log("Hello");
        throw new ApolloError("Not authenticated", "not_authenticated");
      }

      await jwt.verify(token, accessSecret);

      req.user = tokenPair.user as User;
      return next();
    },
  );
};
