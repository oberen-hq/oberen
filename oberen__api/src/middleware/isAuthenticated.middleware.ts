import { ApolloError } from "apollo-server-express";
import { createMethodDecorator } from "type-graphql";
import { Context } from "../types";

export function isAuthenticated(): any {
  createMethodDecorator<Context>(async ({ context: { req, prisma } }, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new ApolloError("Not Authenticated.", "401");
    }

    const tokenType = token[0];
    const accessToken = token[1];

    if (tokenType.toLowerCase() === "bearer") {
      throw new ApolloError("Not Authenticated.", "401");
    }

    const tokenPair = await prisma.tokenPair.findUnique({
      where: {
        accessToken,
      },
      include: {
        user: {
          include: {
            posts: true,
            likedPosts: true,
            createdComments: true,
            likedComments: true,
            oauthConnections: true,
            profile: true,
          },
        },
      },
    });

    if (!tokenPair) {
      throw new ApolloError("Not Authenticated", "401");
    }

    if (tokenPair.user.isLocal) {
      req.user = tokenPair.user as any;
      next();
    }

    // Check if token exceeds 8 hours

    req.user = tokenPair.user as any;

    next();
  });
}
