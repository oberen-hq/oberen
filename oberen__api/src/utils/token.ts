import { PrismaClient } from "@prisma/client";
import { User } from "../resolver-types";
import jwt from "jsonwebtoken";
import { ApolloError } from "apollo-server-core";

export default class Token extends PrismaClient {
  createTokens = async (
    user: User,
    accessSecret: string,
    refreshSecret: string
  ) => {
    try {
      const accessToken = await jwt.sign(user, accessSecret as string, {
        expiresIn: "1h",
      });

      const refreshToken = await jwt.sign(user, refreshSecret as string, {
        expiresIn: "7d",
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
      return {};
    }

    const user = await this.user.findFirst({ where: { id: data.id } });

    if (!user) {
      return {};
    }

    const newRefreshSecret = user.password + refreshSecret;

    try {
      await jwt.verify(refreshToken, newRefreshSecret);
    } catch (err) {
      return {};
    }

    const [newToken, newRefreshToken] = await this.createTokens(
      user,
      accessSecret,
      refreshSecret
    );

    return {
      token: newToken,
      refreshToken: newRefreshToken,
      user,
    };
  };
}
