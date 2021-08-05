import { ApolloError } from "apollo-server-errors";
import { Resolver, Query, Ctx, Arg } from "type-graphql";
import { Context } from "../../context";
import LocalUserRepo from "../../db/LocalUserRepo";
import { User } from "../../resolver-types/models/User";
import FindAllUsersArgs from "./args/FindAllUsersArgs";
import executeOrFail from "../../utils/executeOrFail";

const localUser = new LocalUserRepo();

@Resolver()
export default class FindAllUsers {
  @Query(() => [User])
  async register(
    @Arg("args") args: FindAllUsersArgs
  ): Promise<User[] | ApolloError> {
    return executeOrFail(async () => {
      return localUser.findAllUsers(args);
    });
  }
}
