import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types";

/**
 * Authentication middleware
 *
 * @description This is the middleware for verifying a user is an employer to access certain api routes.
 * @returns {None}
 *
 * **/

const isEmployer: MiddlewareFn<MyContext> = async ({ context }, next) => {
  // Verify the user is an employer

  const roles: Array<string> = context.req.session.user.roles;

  if (!roles.includes("EMPLOYER")) {
    throw new Error("Not an employer");
  }

  return next();
};

export default isEmployer;
