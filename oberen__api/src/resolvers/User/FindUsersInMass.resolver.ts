// IMPORTS

import LocalUserRepo from "../../db/LocalUserRepo";
import FindUsersInMassArgs from "./args/FindUsersInMass";

import { ApolloError } from "apollo-server-errors";
import { Resolver, Query, Arg } from "type-graphql";
import { User } from "../../resolver-types/models";

// CODE

const localUser = new LocalUserRepo();

@Resolver()
export default class FindUsersInMassResolver {
  @Query(() => [User])
  async findUsersInMass(
    @Arg("args") args: FindUsersInMassArgs,
  ): Promise<User[] | ApolloError> {
    return await localUser.findInMass(args);
  }
}
