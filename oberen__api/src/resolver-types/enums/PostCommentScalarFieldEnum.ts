import * as TypeGraphQL from "type-graphql";

export enum PostCommentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  body = "body",
  creatorId = "creatorId",
  postId = "postId",
  edited = "edited",
  likes = "likes"
}
TypeGraphQL.registerEnumType(PostCommentScalarFieldEnum, {
  name: "PostCommentScalarFieldEnum",
  description: undefined,
});
