import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default class TokenPairUtil extends PrismaClient {
  /**
   * Generate a unique access token.
   *
   * @returns {string} The generated access token.
   *
   * **/

  generateAccessToken(data: any): string {
    const accessSecret = process.env.ACCESS_SECRET as string;
    const token = jwt.sign(data, accessSecret, {
      expiresIn: "24h",
    });

    return token;
  }

  generateRefreshToken(data: any): string {
    const refreshSecret = (data?.password +
      process.env.REFRESH_SECRET) as string;

    const token = jwt.sign(data, refreshSecret, {
      expiresIn: "365d",
    });

    return token;
  }

  /**
   * Generate a pair of tokens (access + refresh)
   *
   * @returns {[string]} The generated access tokens.
   *
   * **/

  public generateTokenPair = async (data: any) => {
    try {
      const accessToken: string = this.generateAccessToken(data);
      const refreshToken: string = this.generateRefreshToken(data);

      await this.tokenPair.create({
        data: {
          accessToken: accessToken,
          refreshToken: refreshToken,
          user: {
            connect: {
              id: data.id,
            },
          },
        },
      });

      return {
        accessToken,
        refreshToken,
      };
    } catch (err) {
      return null;
    }
  };

  /**
   * Regenerates a pair of tokens.
   *
   * @returns {[string]} The refreshed tokens
   *
   * **/

  regenerateTokenPair = async (refreshToken: string, data: any) => {
    try {
      const accessToken = this.generateAccessToken(data);
      const refreshToken2 = this.generateRefreshToken(data);

      const old_tokens = await this.tokenPair.findUnique({
        where: { refreshToken },
      });

      if (!old_tokens) return null;

      await this.$executeRaw(
        `UPDATE "User" set count = count + 1 WHERE id = ${old_tokens.userId}`,
      );

      await this.tokenPair.update({
        data: {
          accessToken: accessToken,
          refreshToken: refreshToken2,
        },
        where: {
          refreshToken: old_tokens.refreshToken,
        },
      });

      return {
        accessToken,
        refreshToken2,
      };
    } catch (err) {
      return null;
    }
  };
}
