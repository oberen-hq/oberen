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
  if (!context.req.session.user) {
    throw new Error("not_authenticated");
  }

  return next();
};

export default isAuth;
