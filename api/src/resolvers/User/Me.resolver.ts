import { ApolloError } from "apollo-server-errors";
import { Ctx, Query, Resolver } from "type-graphql";
import { isAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { User } from "../../resolver-types/models";
import { Context } from "../../context";

@Resolver()
export default class MeResolver {
  @Query(() => User)
  me(@Ctx() { req }: Context): Promise<User | ApolloError> {
    const user = req.user as any;
    return user;
  }
}
