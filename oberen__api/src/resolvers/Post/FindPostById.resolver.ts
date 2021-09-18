// IMPORTS

import PostRepo from "../../db/PostRepo";
import FindPostByIdArgs from "./args/FindPostByIdArgs";

import { Post } from "../../resolver-types/models";
import { ApolloError } from "apollo-server-express";
import { Resolver, Query, Arg } from "type-graphql";
import { PostResponse } from "./responses/Post.response";

// CODE

const post = new PostRepo();

@Resolver()
export default class FindPostByIdResolver {
  @Query(() => Post) // Set response for resolver
  async findPostById(
    @Arg("args") { postId }: FindPostByIdArgs,
  ): Promise<Post | ApolloError> {
    const thePost: any = await post.findById(postId); // Find post by id
    return thePost;
  }
}
