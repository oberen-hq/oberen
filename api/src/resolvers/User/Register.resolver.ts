import { Resolver, Mutation, Arg } from "type-graphql";
import { UserResponse } from "./responses/User.response";
import RegisterArgs from "./args/RegisterArgs";
import LocalUserRepo from "../../db/LocalUserRepo";
import executeOrFail from "../..//utils/executeOrFail";
import { ApolloError } from "apollo-server-core";

const localUser = new LocalUserRepo();

@Resolver()
export default class RegisterResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("args") args: RegisterArgs
  ): Promise<UserResponse | ApolloError> {
    // TODO: Add Oauth Register

    return executeOrFail(async () => {
      return localUser.create(args);
    });
  }
}
