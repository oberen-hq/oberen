import * as TypeGraphQL from "type-graphql";

export enum UserType {
  LOCAL = "LOCAL",
  OAUTH = "OAUTH"
}
TypeGraphQL.registerEnumType(UserType, {
  name: "UserType",
  description: undefined,
});
