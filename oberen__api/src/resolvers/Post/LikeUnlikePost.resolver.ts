import { ApolloError } from "apollo-server-core";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Post } from "../../resolver-types/models";
import { Context } from "../../types";
import LikeUnlikePostArgs from "./args/LikeUnlikePostArgs";

import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";

@Resolver()
export default class LikeUnlikePostResolver {
  @IsAuthenticated()
  @Mutation(() => Post)
  async likePost(
    @Arg("args") { postId }: LikeUnlikePostArgs,
    @Ctx() { req, prisma }: Context
  ): Promise<Post | ApolloError> {
    const user = req.user;

    const likedPost = prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likers: {
          connect: [
            {
              id: user.id,
            },
          ],
        },
      },
    });

    if (likedPost) {
      return likedPost;
    } else {
      throw new ApolloError("Error liking post", "liked_post_error");
    }
  }

  @Mutation(() => Post)
  async unlikePost(
    @Arg("args") { postId }: LikeUnlikePostArgs,
    @Ctx() { req, prisma }: Context
  ) {
    const user = req.user;

    const unlikedPost = prisma.post.update({
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
