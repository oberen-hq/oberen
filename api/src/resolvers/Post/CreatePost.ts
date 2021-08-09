import { ApolloError } from "apollo-server-express";
import { Post } from "~/resolver-types/models";
import { PostResponse } from "./responses/Post.response";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Resolver, Ctx, Mutation, Arg } from "type-graphql";
import CreatePostArgs from "./args/CreatePostArgs";
import PostRepo from "../../db/PostRepo";
import executeOrFail from "../../utils/executeOrFail";

const post = new PostRepo();

@Resolver()
export default class CreatePostResolver {
  @Mutation(() => PostResponse)
  async register(
    @Arg("args") args: CreatePostArgs
  ): Promise<PostResponse | ApolloError> {
    return executeOrFail(async () => {
      return post.create(args);
    });
  }
}
