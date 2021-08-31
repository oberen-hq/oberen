import { ApolloError } from "apollo-server-express";
import { createMethodDecorator } from "type-graphql";
import { Context } from "../types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../resolver-types/models";

import Token from "../utils/token";

const tokenGen = new Token();

dotenv.config();

interface CreatedTokens {
  token: string;
  refreshToken: string;
  user: User;
}

export const IsAuthenticated = (): any => {
  return createMethodDecorator<Context>(
    async ({ context: { req, res } }, next) => {
      const accessToken = req.headers["x-token"];

      if (accessToken) {
        try {
          const user = jwt.verify(
            accessToken as string,
            process.env.ACCESS_SECRET as any
          );

          req.user = user as User;
        } catch (err) {
          const refreshToken = req.headers["x-access-token"] as string;
          const accessSecret = process.env.ACCESS_SECRET as string;
          const refreshSecret = process.env.REFRESH_SECRET as string;
          const data: CreatedTokens | any = await tokenGen.refreshTokens(
            refreshToken,
            accessSecret,
            refreshSecret
          );

          if (!data) {
            throw new ApolloError("Not Authenticated", "not_authenticated");
          }

          if (data.token && data.refreshToken) {
            res.set(
              "Access-Control-Expose-Headers",
              "x-token, x-refresh-token"
            );
            res.set("x-token", data.token);
            res.set("x-refresh-token", data.refreshToken);
          }

          req.user = data.user as User;
        }
      }
    }
  );
};
