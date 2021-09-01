import { ApolloError } from "apollo-server-express";
import { createMethodDecorator } from "type-graphql";
import { Context } from "../types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../resolver-types/models";

import Token from "../utils/token";
import { userInfo } from "os";

const tokenGen = new Token();

dotenv.config();

export const IsAuthenticated = (): any => {
  return createMethodDecorator<Context>(
    async ({ context: { req, prisma } }, next) => {
      const access = req.headers["x-token"] as string;
      const accessToken = access.split(" ")[1];
      const accessSecret = process.env.ACCESS_SECRET as string;
      const refreshSecret = process.env.REFRESH_SECRET as string;

      if (accessToken) {
        try {
          const user = jwt.verify(accessToken as string, accessSecret);
          req.user = user as User;
          return next();
        } catch (err) {
          const tokenPair = await prisma.tokenPair.findFirst({
            where: {
              accessToken: accessToken,
            },
          });
          if (!tokenPair) {
            throw new ApolloError("Not authenticated", "not_authenticated");
          }
          try {
            const data: any = await tokenGen.refreshTokens(
              tokenPair.refreshToken,
              accessSecret,
              refreshSecret
            );

            if (!data) {
              throw new ApolloError("Not authenticated", "not_authenticated");
            }
            await prisma.tokenPair.update({
              where: {
                id: tokenPair.id,
              },
              data: {
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
              },
            });
            const user = await prisma.user.findFirst({
              where: {
                id: tokenPair.userId,
              },
            });
            req.user = user as any;
            return next();
          } catch (err) {
            throw new ApolloError("Not authenticated", "not_authenticated");
          }
        }
      } else {
        throw new ApolloError("Not authenticated", "not_authenticated");
      }
    }
  );
};
