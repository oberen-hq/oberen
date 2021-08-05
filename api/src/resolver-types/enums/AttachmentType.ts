import * as TypeGraphQL from "type-graphql";

export enum AttachmentType {
  image = "image",
  video = "video",
  job = "job",
  organization = "organization",
  post = "post",
  shift = "shift",
  other = "other"
}
TypeGraphQL.registerEnumType(AttachmentType, {
  name: "AttachmentType",
  description: undefined,
});
