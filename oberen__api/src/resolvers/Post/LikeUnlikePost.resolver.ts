// IMPORTS

import connectIdArray from "../../utils/connectIdArray";
import LikeUnlikePostArgs from "./args/LikeUnlikePostArgs";

import { ApolloError } from "apollo-server-core";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Post } from "../../resolver-types/models";
import { Context } from "../../types";
import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";

// CODE

@Resolver()
export default class LikeUnlikePostResolver {
  @IsAuthenticated() // Middleware
  @Mutation(() => Post) // Set response for resolver
  async likePost(
    @Arg("args") { postId }: LikeUnlikePostArgs,
    @Ctx() { req, prisma }: Context,
  ): Promise<Post | ApolloError> {
    const user = req.user; // Get current user

    const userOwnsPost = await prisma.post.findFirst({
      // Find post from provided postId
      where: {
        id: postId,
        creatorId: user.id,
      },
    });

    // Check user owns post, it's been decided you can't like your own post - subject to change

    if (userOwnsPost) {
      throw new ApolloError("You can't like your own post", "user_owns_post");
    }

    // Update post and connect user id to the liker

    const likedPost = await prisma.post.update({
      where: { id: postId },
      data: { likers: { connect: [{ id: user.id }] } },
    });

    if (likedPost) {
      return likedPost;
    } else {
      throw new ApolloError("Error liking post", "liked_post_error");
    }
  }

  @IsAuthenticated() // Middleware
  @Mutation(() => Post) // Set response for resolver
  async unlikePost(
    @Arg("args") { postId }: LikeUnlikePostArgs,
    @Ctx() { req, prisma }: Context,
  ) {
    const user = req.user; // Get current user

    const userOwnsPost = await prisma.post.findFirst({
      where: {
        id: postId,
        creatorId: user.id,
      },
    });

    if (userOwnsPost) {
      throw new ApolloError("You can't like your own post", "user_owns_post");
    }

    const unlikedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likers: {
          disconnect: {
            id: user.id,
          },
        },
      },
    });

    return unlikedPost;
  }
}
