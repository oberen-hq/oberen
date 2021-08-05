import * as TypeGraphQL from "type-graphql";

export enum LabelScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  description = "description",
  uses = "uses",
  creatorId = "creatorId",
  profileId = "profileId"
}
TypeGraphQL.registerEnumType(LabelScalarFieldEnum, {
  name: "LabelScalarFieldEnum",
  description: undefined,
});
