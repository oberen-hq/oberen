import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  title = "title",
  description = "description",
  type = "type",
  likes = "likes",
  creatorId = "creatorId"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
