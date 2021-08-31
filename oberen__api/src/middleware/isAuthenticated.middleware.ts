import { ApolloError } from "apollo-server-express";
import { createMethodDecorator } from "type-graphql";
import { Context } from "../types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../resolver-types/models";

import Token from "../utils/token";
import { nextTick } from "process";

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
      const access = req.headers["x-token"] as string;
      const accessToken = access.split(" ")[1];

      console.log(accessToken);

      if (accessToken) {
        try {
          const user = jwt.verify(
            accessToken as string,
            process.env.ACCESS_SECRET as any
          );

          req.user = user as User;

          return next();
        } catch (err) {
          const refresh = req.headers["x-refresh-token"] as string;
          const refreshToken = refresh[1];
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
          return next();
        }
      }

      throw new ApolloError("Not authenticated", "not_authenticated");
    }
  );
};
