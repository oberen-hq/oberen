import * as TypeGraphQL from "type-graphql";

export enum UserSettingsScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userProfileId = "userProfileId",
  location = "location",
  website = "website"
}
TypeGraphQL.registerEnumType(UserSettingsScalarFieldEnum, {
  name: "UserSettingsScalarFieldEnum",
  description: undefined,
});
