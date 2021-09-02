import { ApolloError } from "apollo-server-express";
import { Resolver, Query, Arg } from "type-graphql";
import PostRepo from "../../db/PostRepo";
import { PostResponse } from "./responses/Post.response";
import FindPostByIdArgs from "./args/FindPostByIdArgs";

const post = new PostRepo();

@Resolver()
export default class FindPostByIdResolver {
  @Query(() => PostResponse)
  async findPostById(
    @Arg("args") { postId }: FindPostByIdArgs,
  ): Promise<PostResponse | ApolloError> {
    return post.findById(postId);
  }
}
