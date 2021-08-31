import * as TypeGraphQL from "type-graphql";

export enum LabelScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  title = "title",
  color = "color",
  description = "description",
  creatorId = "creatorId",
  profileId = "profileId"
}
TypeGraphQL.registerEnumType(LabelScalarFieldEnum, {
  name: "LabelScalarFieldEnum",
  description: undefined,
});
