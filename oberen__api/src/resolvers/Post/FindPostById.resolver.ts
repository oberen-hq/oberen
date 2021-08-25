import { ApolloError } from "apollo-server-express";
import { Resolver, Query, Arg } from "type-graphql";
import PostRepo from "../../db/PostRepo";
import { Post } from "../../resolver-types/models";
import FindPostByIdArgs from "./args/FindPostByIdArgs";
import executeOrFail from "../../utils/executeOrFail";

const post = new PostRepo();

@Resolver()
export default class FindPostByIdResolver {
  @Query(() => Post)
  async findPostById(
    @Arg("args") { postId }: FindPostByIdArgs
  ): Promise<Post | ApolloError> {
    return executeOrFail(async () => {
      return post.findById(postId);
    });
  }
}
