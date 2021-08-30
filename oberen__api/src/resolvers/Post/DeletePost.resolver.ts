import { ApolloError } from "apollo-server-express";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import DeletePostArgs from "./args/DeletePostArgs";
import PostRepo from "../../db/PostRepo";

const post = new PostRepo();

@Resolver()
export default class DeletePostResolver {
  @Mutation(() => String)
  async deletePost(
    @Arg("args") args: DeletePostArgs
  ): Promise<string | ApolloError> {
    const userId = "6129ebca0050dd980091365e";
    return await post.delete(userId, args.postId);
  }
}
