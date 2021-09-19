// IMPORTS

import HashtagRepo from "../../db/HashtagRepo";
import FindHashtagByIdArgs from "./args/FindHashtagByIdArgs";

import { ApolloError } from "apollo-server-express";
import { Resolver, Arg, Query } from "type-graphql";
import { Hashtag } from "../../resolver-types/models";

const hashtag = new HashtagRepo();

// CODE

@Resolver()
export default class FindHashtagByIdResolver {
  @Query(() => Hashtag)
  async findHashtagById(
    @Arg("args") { hashtagId }: FindHashtagByIdArgs,
  ): Promise<Hashtag | ApolloError> {
    return await hashtag.findById(hashtagId);
  }
}
