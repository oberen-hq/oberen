import { ApolloError } from "apollo-server-express";
import { PostResponse } from "./responses/Post.response";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import CreatePostArgs from "./args/CreatePostArgs";
import PostRepo from "../../db/PostRepo";

import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { Context } from "../../types";

const post = new PostRepo();

@Resolver()
export default class CreatePostResolver {
  @IsAuthenticated()
  @Mutation(() => PostResponse)
  async createPost(
    @Arg("args") args: CreatePostArgs,
    @Ctx() { req }: Context,
  ): Promise<PostResponse | ApolloError> {
    const user = req.user;
    return await post.create(user.id, args);
  }
}
