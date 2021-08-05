import * as TypeGraphQL from "type-graphql";

export enum PostCommentScalarFieldEnum {
  id = "id",
  body = "body",
  creatorId = "creatorId",
  postId = "postId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  edited = "edited",
  likes = "likes"
}
TypeGraphQL.registerEnumType(PostCommentScalarFieldEnum, {
  name: "PostCommentScalarFieldEnum",
  description: undefined,
});
