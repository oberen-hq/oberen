// IMPORTS

import LocalUserRepo from "../../db/LocalUserRepo";
import LoginArgs from "./args/LoginArgs";

import { Resolver, Mutation, Arg } from "type-graphql";
import { UserResponse } from "./responses/User.response";
import { ApolloError } from "apollo-server-core";

// CODE

const localUser = new LocalUserRepo();

@Resolver()
export class LoginResolver {
  @Mutation(() => UserResponse) // Set response for resolver
  async login(
    @Arg("args") args: LoginArgs,
  ): Promise<UserResponse | ApolloError> {
    return await localUser.login(args); // Login user
  }
}
