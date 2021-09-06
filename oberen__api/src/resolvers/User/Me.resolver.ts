// IMPORTS

import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../../resolver-types/models";
import { Context } from "../../types";
import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";

// CODES

@Resolver()
export default class MeResolver {
  @IsAuthenticated()
  @Query(() => User)
  me(@Ctx() { req }: Context): Promise<User> {
    const user = req.user as User;
    //@ts-ignore
    return user;
  }
}
