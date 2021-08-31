import * as TypeGraphQL from "type-graphql";

export enum HashtagScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  uses = "uses",
  creatorId = "creatorId"
}
TypeGraphQL.registerEnumType(HashtagScalarFieldEnum, {
  name: "HashtagScalarFieldEnum",
  description: undefined,
});
