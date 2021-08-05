import * as TypeGraphQL from "type-graphql";

export enum UserProfileScalarFieldEnum {
  id = "id",
  updatedAt = "updatedAt",
  avatarUrl = "avatarUrl",
  bio = "bio"
}
TypeGraphQL.registerEnumType(UserProfileScalarFieldEnum, {
  name: "UserProfileScalarFieldEnum",
  description: undefined,
});
