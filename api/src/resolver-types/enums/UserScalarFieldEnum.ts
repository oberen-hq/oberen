import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  username = "username",
  displayName = "displayName",
  email = "email",
  password = "password",
  userRole = "userRole",
  profileId = "profileId",
  postId = "postId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
