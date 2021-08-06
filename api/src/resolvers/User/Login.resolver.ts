import { Resolver, Mutation, Arg } from "type-graphql";
import { LocalUserResponse } from "./responses/User.response";
import LoginArgs from "./args/LoginArgs";
import LocalUserRepo from "../../db/LocalUserRepo";
import executeOrFail from "../..//utils/executeOrFail";
import { ApolloError } from "apollo-server-core";

const localUser = new LocalUserRepo();

@Resolver()
export class LoginResolver {
  @Mutation(() => LocalUserResponse)
  async login(
    @Arg("args") args: LoginArgs
  ): Promise<LocalUserResponse | ApolloError> {
    return executeOrFail(async () => {
      return localUser.loginUser(args);
    });
  }
}
