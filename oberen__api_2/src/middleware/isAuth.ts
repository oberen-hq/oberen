import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types";

import jwt from "jsonwebtoken";
import User from "../entities/User";

/**
 * Authentication middleware
 *
 * @description This is the authentication middleware for a user doing any act that requires a user
 * @returns {None}
 *
 * **/

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const token = context.req.headers.authorization;
  const accessSecret = process.env.ACCESS_SECRET;

  if (!token) {
    throw new Error("Not authenticated.");
  }

  const existingUser = await User.findOne({ accessToken: token });

  if (!existingUser) {
    throw new Error("Not authenticated.");
  }

  await jwt.verify(token, accessSecret);

  context.req.user = existingUser;
  return next();
};
