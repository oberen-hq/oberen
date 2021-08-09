import { ApolloError } from "apollo-server-express";
import { Resolver, Query, Arg } from "type-graphql";
import LocalUserRepo from "../../db/LocalUserRepo";
import { User } from "../../resolver-types/models/User";
import FindUserByIdArgs from "./args/FindUserByIdArgs";
import executeOrFail from "../../utils/executeOrFail";

const localUser = new LocalUserRepo();

@Resolver()
export default class FindUserById {
  @Query(() => User)
  async findUserById(
    @Arg("args") args: FindUserByIdArgs
  ): Promise<User | ApolloError> {
    return executeOrFail(async () => {
      return localUser.findUserById(args.id);
    });
  }
}
