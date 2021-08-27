import * as TypeGraphQL from "type-graphql";

export enum AttachmentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  attachmentUrl = "attachmentUrl",
  type = "type",
  postId = "postId",
  reportId = "reportId",
  creatorId = "creatorId"
}
TypeGraphQL.registerEnumType(AttachmentScalarFieldEnum, {
  name: "AttachmentScalarFieldEnum",
  description: undefined,
});
