import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../../resolver-types/models";
import RegisterArgs from "./args/RegisterArgs";
import LocalUserRepo from "../../db/LocalUserRepo";
import executeOrFail from "../..//utils/executeOrFail";
import { ApolloError } from "apollo-server-core";

const localUser = new LocalUserRepo();

@Resolver()
export default class RegisterResolver {
  @Mutation(() => User)
  async register(@Arg("args") args: RegisterArgs): Promise<User | ApolloError> {
    // TODO: Add Oauth Register

    return executeOrFail(async () => {
      return localUser.createUser(args);
    });
  }
}
