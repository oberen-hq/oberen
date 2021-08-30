import { ApolloError } from "apollo-server-express";
import { Resolver, Query, Arg } from "type-graphql";
import LocalUserRepo from "../../db/LocalUserRepo";
import { User } from "../../resolver-types/models";
import FindUserByNameArgs from "./args/FindUserByNameArgs";

const localUser = new LocalUserRepo();

@Resolver()
export default class FindUserByNameResolver {
  @Query(() => User)
  async findUserByName(
    @Arg("args") args: FindUserByNameArgs
  ): Promise<User | ApolloError> {
    return await localUser.findByName(args.username);
  }
}
