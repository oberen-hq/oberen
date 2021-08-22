import * as TypeGraphQL from "type-graphql";

export enum AttachmentType {
  image = "image",
  video = "video",
  organization = "organization",
  post = "post",
  other = "other"
}
TypeGraphQL.registerEnumType(AttachmentType, {
  name: "AttachmentType",
  description: undefined,
});
