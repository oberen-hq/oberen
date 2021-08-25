import { ApolloError } from "apollo-server-express";
import { PostResponse } from "./responses/Post.response";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import CreatePostArgs from "./args/CreatePostArgs";
import PostRepo from "../../db/PostRepo";
import executeOrFail from "../../utils/executeOrFail";

const post = new PostRepo();

@Resolver()
export default class CreatePostResolver {
  @Mutation(() => PostResponse)
  async createPost(
    @Arg("args") args: CreatePostArgs
  ): Promise<PostResponse | ApolloError> {
    return executeOrFail(async () => {
      return post.create(args);
    });
  }
}
