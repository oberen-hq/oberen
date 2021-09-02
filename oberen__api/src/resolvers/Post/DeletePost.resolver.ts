import { ApolloError } from "apollo-server-express";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import DeletePostArgs from "./args/DeletePostArgs";
import PostRepo from "../../db/PostRepo";

import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { Context } from "../../types";

const post = new PostRepo();

@Resolver()
export default class DeletePostResolver {
  @IsAuthenticated()
  @Mutation(() => String)
  async deletePost(
    @Arg("args") args: DeletePostArgs,
    @Ctx() { req }: Context,
  ): Promise<string | ApolloError> {
    const user = req.user;
    return await post.delete(user.id, args.postId);
  }
}
