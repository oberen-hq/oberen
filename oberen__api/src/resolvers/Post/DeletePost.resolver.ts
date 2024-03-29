// IMPORTS

import DeletePostArgs from "./args/DeletePostArgs";
import PostRepo from "../../db/PostRepo";

import { ApolloError } from "apollo-server-express";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { Context } from "../../types";

// CODE

const post = new PostRepo();

@Resolver()
export default class DeletePostResolver {
  @IsAuthenticated() // Middleware
  @Mutation(() => String) // Set response
  async deletePost(
    @Arg("args") args: DeletePostArgs,
    @Ctx() { req }: Context,
  ): Promise<string | ApolloError> {
    const user = req.user; // Get current user
    return await post.delete(user.id, args.postId); // Delete post
  }
}
