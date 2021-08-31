import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentListRelationFilter } from "../inputs/AttachmentListRelationFilter";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPostTypeFilter } from "../inputs/EnumPostTypeFilter";
import { HashtagListRelationFilter } from "../inputs/HashtagListRelationFilter";
import { LabelListRelationFilter } from "../inputs/LabelListRelationFilter";
import { PostCommentListRelationFilter } from "../inputs/PostCommentListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostWhereInput {
  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPostTypeFilter, {
    nullable: true
  })
  type?: EnumPostTypeFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  likers?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  likes?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => PostCommentListRelationFilter, {
    nullable: true
  })
  comments?: PostCommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AttachmentListRelationFilter, {
    nullable: true
  })
  attachments?: AttachmentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => HashtagListRelationFilter, {
    nullable: true
  })
  hashtags?: HashtagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LabelListRelationFilter, {
    nullable: true
  })
  labels?: LabelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  creator?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creatorId?: StringFilter | undefined;
}
