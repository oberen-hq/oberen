import { ApolloError } from "apollo-server-errors";
import { Resolver, Query, Arg } from "type-graphql";
import PostRepo from "../../db/PostRepo";
import { Post } from "../../resolver-types/models";
import FindPostsInMassArgs from "./args/FindPostInMassArgs";
import executeOrFail from "../../utils/executeOrFail";

const posts = new PostRepo();

@Resolver()
export default class FindPostsInMassResolver {
  @Query(() => [Post])
  async findPostsInMass(
    @Arg("args") args: FindPostsInMassArgs
  ): Promise<Post[] | ApolloError> {
    return executeOrFail(async () => {
      return await posts.findInMass(args);
    });
  }
}
