import { ApolloError } from "apollo-server-errors";
import { Resolver, Query, Arg } from "type-graphql";
import LocalUserRepo from "../../db/LocalUserRepo";
import { User } from "../../resolver-types/models";
import FindUsersInMassArgs from "./args/FindUsersInMass";
import executeOrFail from "../../utils/executeOrFail";

const localUser = new LocalUserRepo();

@Resolver()
export default class FindUsersInMassResolver {
  @Query(() => [User])
  async findAllUsers(
    @Arg("args") args: FindUsersInMassArgs
  ): Promise<User[] | ApolloError> {
    return executeOrFail(async () => {
      return localUser.findInMass(args);
    });
  }
}
