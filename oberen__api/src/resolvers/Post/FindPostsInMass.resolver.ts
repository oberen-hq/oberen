import { ApolloError } from "apollo-server-errors";
import { Resolver, Query, Arg } from "type-graphql";
import PostRepo from "../../db/PostRepo";
import { Post } from "../../resolver-types/models";
import FindPostsInMassArgs from "./args/FindPostInMassArgs";

import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";

const post = new PostRepo();

@Resolver()
export default class FindPostsInMassResolver {
  @Query(() => [Post])
  async findPostsInMass(
    @Arg("args") args: FindPostsInMassArgs
  ): Promise<Post[] | ApolloError> {
    return await post.findInMass(args);
  }
}
