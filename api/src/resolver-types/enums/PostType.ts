import * as TypeGraphQL from "type-graphql";

export enum PostType {
  post = "post",
  job = "job",
  organization = "organization",
  shift = "shift",
  article = "article",
  feedback = "feedback",
  poll = "poll"
}
TypeGraphQL.registerEnumType(PostType, {
  name: "PostType",
  description: undefined,
});
