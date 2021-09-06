// IMPORTS

import LocalUserRepo from "../../db/LocalUserRepo";
import FindUserByNameArgs from "./args/FindUserByNameArgs";

import { ApolloError } from "apollo-server-express";
import { Resolver, Query, Arg } from "type-graphql";
import { User } from "../../resolver-types/models";

// CODE

const localUser = new LocalUserRepo();

@Resolver()
export default class FindUserByNameResolver {
  @Query(() => User)
  async findUserByName(
    @Arg("args") args: FindUserByNameArgs,
  ): Promise<User | ApolloError> {
    return await localUser.findByName(args.username);
  }
}
