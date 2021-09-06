// IMPORTS

import RegisterArgs from "./args/RegisterArgs";
import LocalUserRepo from "../../db/LocalUserRepo";

import { Resolver, Mutation, Arg } from "type-graphql";
import { UserResponse } from "./responses/User.response";
import { ApolloError } from "apollo-server-core";

// CODE

const localUser = new LocalUserRepo();

@Resolver()
export default class RegisterResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("args") args: RegisterArgs,
  ): Promise<UserResponse | ApolloError> {
    if (args.isLocal) {
      return await localUser.create(args);
    } else {
      throw new ApolloError("Oauth Service is not setup yet!", "400");
    }
  }
}
