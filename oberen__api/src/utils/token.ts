import { PrismaClient } from "@prisma/client";
import { User } from "../resolver-types";
import jwt from "jsonwebtoken";
import { ApolloError } from "apollo-server-core";
import { count } from "console";

export default class Token extends PrismaClient {
  createTokens = async (
    user: User,
    accessSecret: string,
    refreshSecret: string
  ) => {
    try {
      const accessToken = await jwt.sign(user, accessSecret as string, {
        expiresIn: "1m",
      });

      const refreshToken = await jwt.sign(user, refreshSecret as string, {
        expiresIn: "60d",
      });

      return [accessToken, refreshToken];
    } catch (err) {
      throw new ApolloError("Internal Server Error", "internal_server_error");
    }
  };

  refreshTokens = async (
    refreshToken: string,
    accessSecret: string,
    refreshSecret: string
  ) => {
    const data = (await jwt.decode(refreshToken)) as User;

    if (!data) {
      return false;
    }

    const user = await this.user.findFirst({ where: { id: data.id } });

    if (!user) {
      return false;
    }

    const newRefreshSecret = user.password + refreshSecret;

    try {
      await jwt.verify(refreshToken, newRefreshSecret);
    } catch (err) {
      await this.user.update({
        where: {
          id: user.id,
        },
        data: {
          count: user.count + 1,
        },
      });

      return false;
    }

    const [newToken, newRefreshToken] = await this.createTokens(
      user,
      accessSecret,
      newRefreshSecret
    );

    return {
      token: newToken,
      refreshToken: newRefreshToken,
      user,
    };
  };
}
