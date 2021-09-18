// IMPORTS

import CreatePostArgs from "./args/CreatePostArgs";
import PostRepo from "../../db/PostRepo";

import { ApolloError } from "apollo-server-express";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { Context } from "../../types";
import { Post } from "../../resolver-types/models";

// CODE

const post = new PostRepo();

@Resolver()
export default class CreatePostResolver {
  @IsAuthenticated() // Middleware
  @Mutation(() => Post) // Set response for resolver
  async createPost(
    @Arg("args") args: CreatePostArgs,
    @Ctx() { req }: Context,
  ): Promise<Post | ApolloError> {
    const user = req.user; // Get current user
    return await post.create(user.id, args); // Create post
  }
}
