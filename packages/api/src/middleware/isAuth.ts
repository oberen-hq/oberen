import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types";

/**
 * Authentication middleware
 *
 * @description This is the authentication middleware for a user doing any act that requires a user
 * @returns {None}
 *
 * **/

const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  // Verify the user is authenticated by checking if there is an existing session
  if (!context.req.session.user) {
    throw new Error("Not authenticated");
  }

  return next();
};

export default isAuth;
