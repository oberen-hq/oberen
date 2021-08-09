import * as TypeGraphQL from "type-graphql";

export enum AttachmentScalarFieldEnum {
  id = "id",
  attachmentUrl = "attachmentUrl",
  type = "type",
  postId = "postId",
  reportId = "reportId"
}
TypeGraphQL.registerEnumType(AttachmentScalarFieldEnum, {
  name: "AttachmentScalarFieldEnum",
  description: undefined,
});
