import * as TypeGraphQL from "type-graphql";

export enum AttachmentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  url = "url",
  type = "type",
  postId = "postId"
}
TypeGraphQL.registerEnumType(AttachmentScalarFieldEnum, {
  name: "AttachmentScalarFieldEnum",
  description: undefined,
});
