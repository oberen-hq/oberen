import { ApolloError } from "apollo-server-express";
import { PostResponse } from "./responses/Post.response";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import CreatePostArgs from "./args/CreatePostArgs";
import PostRepo from "../../db/PostRepo";
import executeOrFail from "../../utils/executeOrFail";
import { Context } from "../../context";

const post = new PostRepo();

@Resolver()
export default class CreatePostResolver {
  @isAuthenticated()
  @Mutation(() => PostResponse)
  async createPost(
    @Ctx() { req }: Context,
    @Arg("args") args: CreatePostArgs
  ): Promise<PostResponse | ApolloError> {
    return executeOrFail(async () => {
      return post.create(req.user, args);
    });
  }
}
