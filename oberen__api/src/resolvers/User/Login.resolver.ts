import { Resolver, Mutation, Arg } from "type-graphql";
import { UserResponse } from "./responses/User.response";
import LoginArgs from "./args/LoginArgs";
import LocalUserRepo from "../../db/LocalUserRepo";
import { ApolloError } from "apollo-server-core";

const localUser = new LocalUserRepo();

@Resolver()
export class LoginResolver {
  @Mutation(() => UserResponse)
  async login(
    @Arg("args") args: LoginArgs,
  ): Promise<UserResponse | ApolloError> {
    return await localUser.login(args);
  }
}
