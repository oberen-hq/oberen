// IMPORTS

import LocalUserRepo from "../../db/LocalUserRepo";
import FindUserByIdArgs from "./args/FindUserByIdArgs";

import { ApolloError } from "apollo-server-express";
import { Resolver, Query, Arg } from "type-graphql";
import { User } from "../../resolver-types/models";

// CODE

const localUser = new LocalUserRepo();

@Resolver()
export default class FindUserByIdResolver {
  @Query(() => User) // Set response for resolver
  async findUserById(
    @Arg("args") args: FindUserByIdArgs,
  ): Promise<User | ApolloError> {
    return await localUser.findById(args.id); // Find user by id
  }
}
