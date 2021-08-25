import { ApolloError } from "apollo-server-express";
import { Resolver, Query, Arg } from "type-graphql";
import LocalUserRepo from "../../db/LocalUserRepo";
import { User } from "../../resolver-types/models";
import FindUserByIdArgs from "./args/FindUserByIdArgs";
import executeOrFail from "../../utils/executeOrFail";

const localUser = new LocalUserRepo();

@Resolver()
export default class FindUserByIdResolver {
  @Query(() => User)
  async findUserById(
    @Arg("args") args: FindUserByIdArgs
  ): Promise<User | ApolloError> {
    return executeOrFail(async () => {
      return await localUser.findById(args.id);
    });
  }
}
