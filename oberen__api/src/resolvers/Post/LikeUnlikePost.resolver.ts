import { ApolloError } from "apollo-server-core";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Post, User } from "../../resolver-types/models";
import { Context } from "../../types";
import LikeUnlikePostArgs from "./args/LikeUnlikePostArgs";

@Resolver()
export default class LikeUnlikePostResolver {
  @Mutation(() => Post)
  async likePost(
    @Arg("args") { postId }: LikeUnlikePostArgs,
    @Ctx() { req, prisma }: Context
  ): Promise<Post | ApolloError> {
    const userId = "randomTextbecauseauthdontworkyet";

    const likedPost = prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likers: {
          connect: [
            {
              id: userId,
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
    const userId = "randomTextbecauseauthdontworkyet";

    const unlikedPost = prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likers: {
          disconnect: {
            id: userId,
          },
        },
      },
    });

    return unlikedPost;
  }
}
