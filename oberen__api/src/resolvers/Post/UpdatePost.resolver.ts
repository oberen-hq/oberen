// IMPORTS

import PostRepo from "../../db/PostRepo";
import UpdatePostArgs from "./args/UpdatePostArgs";

import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { Context } from "../../types";
import { Post } from "../../resolver-types/models";

// CODE

const post = new PostRepo();

@Resolver()
export default class UpdatePostResolver {
  @IsAuthenticated() // Middleware
  @Mutation(() => Post) // Set response for resolver
  async updatePost(@Arg("args") args: UpdatePostArgs, @Ctx() { req }: Context) {
    const user = req.user; // Get current user
    return await post.update(user.id, args); // Update post
  }
}
