// IMPORTS

import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../../resolver-types/models";
import { Context } from "../../types";
import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";

// CODES

@Resolver()
export default class MeResolver {
  @IsAuthenticated() // Middleware
  @Query(() => User) // Set response for resolver
  me(@Ctx() { req }: Context): Promise<User> {
    const user = req.user as User; // Get current user
    //@ts-ignore
    return user;
  }
}
