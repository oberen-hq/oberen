import { Resolver, Mutation, Arg } from "type-graphql";
import { UserResponse } from "./responses/User.response";
import RegisterArgs from "./args/RegisterArgs";
import LocalUserRepo from "../../db/LocalUserRepo";
// import OauthUserRepo from "../../db/OAuthUserRepo";
import executeOrFail from "../..//utils/executeOrFail";
import { ApolloError } from "apollo-server-core";

const localUser = new LocalUserRepo();
// const oauthUser = new OauthUserRepo();

@Resolver()
export default class RegisterResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("args") args: RegisterArgs,
  ): Promise<UserResponse | ApolloError> {
    if (args.isLocal) {
      return await localUser.create(args);
    } else {
      // return executeOrFail(async () => {
      //   return oauthUser.create(args);
      // });
      throw new ApolloError("Oauth Service is not setup yet!", "400");
    }
  }
}
