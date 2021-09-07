// IMPORTS

import { ApolloError } from "apollo-server-express";

// CODE

export default async function executeOrFail<T>(cb: () => T | Promise<T>) {
  try {
    return await cb();
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message, err.code);
  }
}
