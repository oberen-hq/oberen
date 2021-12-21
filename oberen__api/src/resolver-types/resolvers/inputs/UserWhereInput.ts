import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleNullableFilter } from "../inputs/EnumRoleNullableFilter";
import { ErrorListRelationFilter } from "../inputs/ErrorListRelationFilter";
import { FollowerListRelationFilter } from "../inputs/FollowerListRelationFilter";
import { FollowingListRelationFilter } from "../inputs/FollowingListRelationFilter";
import { HashtagListRelationFilter } from "../inputs/HashtagListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LabelListRelationFilter } from "../inputs/LabelListRelationFilter";
import { OrganizationListRelationFilter } from "../inputs/OrganizationListRelationFilter";
import { PostCommentListRelationFilter } from "../inputs/PostCommentListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TokenPairListRelationFilter } from "../inputs/TokenPairListRelationFilter";
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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  displayName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isLocal?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleNullableFilter, {
    nullable: true
  })
  role?: EnumRoleNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  count?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TokenPairListRelationFilter, {
    nullable: true
  })
  tokens?: TokenPairListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SessionListRelationFilter, {
    nullable: true
  })
  sessions?: SessionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserProfileRelationFilter, {
    nullable: true
  })
  profile?: UserProfileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  profileId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OrganizationListRelationFilter, {
    nullable: true
  })
  ownedOrganizations?: OrganizationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrganizationListRelationFilter, {
    nullable: true
  })
  joinedOrganizations?: OrganizationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  likedPosts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostCommentListRelationFilter, {
    nullable: true
  })
  likedComments?: PostCommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostCommentListRelationFilter, {
    nullable: true
  })
  createdPostComments?: PostCommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowingListRelationFilter, {
    nullable: true
  })
  following?: FollowingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowerListRelationFilter, {
    nullable: true
  })
  followers?: FollowerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LabelListRelationFilter, {
    nullable: true
  })
  createdLabels?: LabelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => HashtagListRelationFilter, {
    nullable: true
  })
  createdHashtags?: HashtagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ErrorListRelationFilter, {
    nullable: true
  })
  errors?: ErrorListRelationFilter | undefined;
}
