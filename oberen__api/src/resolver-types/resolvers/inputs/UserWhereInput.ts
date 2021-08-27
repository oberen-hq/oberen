import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentListRelationFilter } from "../inputs/AttachmentListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleNullableFilter } from "../inputs/EnumRoleNullableFilter";
import { LabelListRelationFilter } from "../inputs/LabelListRelationFilter";
import { OauthConnectionListRelationFilter } from "../inputs/OauthConnectionListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ReportListRelationFilter } from "../inputs/ReportListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TokenPairListRelationFilter } from "../inputs/TokenPairListRelationFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UserProfileRelationFilter } from "../inputs/UserProfileRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isLocal?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  displayName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleNullableFilter, {
    nullable: true
  })
  userRole?: EnumRoleNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserProfileRelationFilter, {
    nullable: true
  })
  profile?: UserProfileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  profileId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  createdComments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  likedPosts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  likedComments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  following?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  followers?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LabelListRelationFilter, {
    nullable: true
  })
  createdLabels?: LabelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AttachmentListRelationFilter, {
    nullable: true
  })
  createdAttachments?: AttachmentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReportListRelationFilter, {
    nullable: true
  })
  reports?: ReportListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OauthConnectionListRelationFilter, {
    nullable: true
  })
  oauthConnections?: OauthConnectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TokenPairListRelationFilter, {
    nullable: true
  })
  tokens?: TokenPairListRelationFilter | undefined;
}
