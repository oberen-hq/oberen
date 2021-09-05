import * as TypeGraphQL from "type-graphql";

export enum UserProfileScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  avatarURL = "avatarURL",
  bio = "bio"
}
TypeGraphQL.registerEnumType(UserProfileScalarFieldEnum, {
  name: "UserProfileScalarFieldEnum",
  description: undefined,
});
