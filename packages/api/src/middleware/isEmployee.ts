import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types";

/**
 * Authentication middleware
 *
 * @description This is the middleware for verifying a user is an employee to access certain api routes.
 * @returns {None}
 *
 * **/

const isEmployer: MiddlewareFn<MyContext> = async ({ context }, next) => {
  // Verify the user is an employee

  const roles: Array<string> = context.req.session.user.roles;

  if (!roles.includes("EMPLOYEE")) {
    throw new Error("Not an employee");
  }

  return next();
};

export default isEmployer;
