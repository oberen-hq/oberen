import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  displayName = "displayName",
  username = "username",
  email = "email",
  password = "password",
  isLocal = "isLocal",
  role = "role",
  profileId = "profileId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
