// IMPORTS

import CreateHashtagArgs from "./args/CreateHashtagArgs";
import HashtagRepo from "../../db/HashtagRepo";

import { ApolloError } from "apollo-server-express";
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { Context } from "../../types";
import { Hashtag } from "../../resolver-types/models";

// CODE

const hashtag = new HashtagRepo()

@Resolver()
export default class CreateHashtagResolver {
  @IsAuthenticated() // Middleware
  @Mutation(() => Hashtag) // Set response for resolver
  async createHashtag(
    @Arg("args") args: CreateHashtagArgs,
    @Ctx() { req }: Context,
  ): Promise<Hashtag | ApolloError> {
    const user = req.user; // Get current user
    return await hashtag.create(user.id, args); // Create hashtag
  }
}