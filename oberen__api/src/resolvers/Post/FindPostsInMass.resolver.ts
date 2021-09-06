// IMPORTS

import PostRepo from "../../db/PostRepo";
import FindPostsInMassArgs from "./args/FindPostInMassArgs";

import { ApolloError } from "apollo-server-errors";
import { Resolver, Query, Arg } from "type-graphql";
import { Post } from "../../resolver-types/models";

// CODE
const post = new PostRepo();

@Resolver()
export default class FindPostsInMassResolver {
  @Query(() => [Post])
  async findPostsInMass(
    @Arg("args") args: FindPostsInMassArgs,
  ): Promise<Post[] | ApolloError> {
    return await post.findInMass(args);
  }
}
