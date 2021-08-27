import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  isLocal = "isLocal",
  username = "username",
  displayName = "displayName",
  email = "email",
  password = "password",
  role = "role",
  profileId = "profileId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
