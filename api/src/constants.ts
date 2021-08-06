import { NonEmptyArray } from "type-graphql";
export const pathsToResolvers = [
  __dirname + "/resolvers/**/*.resolver.js",
  __dirname + "/resolvers/**/*.resolver.ts",
] as NonEmptyArray<string>;
export const host = "http://localhost";
