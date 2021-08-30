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

      if (tokenType.toLowerCase() === "bearer") {
        const decodedData = await jwt.verify(
          accessToken,
          process.env.JWT_SECRET as string
        );

        req.user = decodedData as User;

        return next();
      } else if (tokenType.toLowerCase() === "oauth") {
        return next();
      }

      throw new ApolloError("Not Authenticated.", "not_authenticated");
    }
  );
};
