// IMPORTS

import HashtagRepo from "../../db/HashtagRepo";
import FindHashtagByNameArgs from "./args/FindHashtagByNameArgs";

import { ApolloError } from "apollo-server-express";
import { Resolver, Arg, Query } from "type-graphql";
import { Hashtag } from "../../resolver-types/models";

const hashtag = new HashtagRepo();

// CODE

@Resolver()
export default class FindHashtagByNameResolver {
    @Query(() => Hashtag)
    async findHashtagByName(
        @Arg("args") {hashtagName}: FindHashtagByNameArgs
    ): Promise<Hashtag | ApolloError> {
        return await hashtag.findByName(hashtagName)
    }
}