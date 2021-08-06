import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../../resolver-types/models";
import { LocalUserResponse } from "./responses/User.response";
import RegisterArgs from "./args/RegisterArgs";
import LocalUserRepo from "../../db/LocalUserRepo";
import executeOrFail from "../..//utils/executeOrFail";
import { ApolloError } from "apollo-server-core";

const localUser = new LocalUserRepo();

@Resolver()
export default class RegisterResolver {
  @Mutation(() => LocalUserResponse)
  async register(
    @Arg("args") args: RegisterArgs
  ): Promise<LocalUserResponse | ApolloError> {
    // TODO: Add Oauth Register

    return executeOrFail(async () => {
      return localUser.createUser(args);
    });
  }
}
