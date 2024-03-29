import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorCreateNestedManyWithoutUserInput } from "../inputs/ErrorCreateNestedManyWithoutUserInput";
import { FollowerCreateNestedManyWithoutUserInput } from "../inputs/FollowerCreateNestedManyWithoutUserInput";
import { FollowingCreateNestedManyWithoutUserInput } from "../inputs/FollowingCreateNestedManyWithoutUserInput";
import { HashtagCreateNestedManyWithoutCreatorInput } from "../inputs/HashtagCreateNestedManyWithoutCreatorInput";
import { LabelCreateNestedManyWithoutCreatorInput } from "../inputs/LabelCreateNestedManyWithoutCreatorInput";
import { OrganizationCreateNestedManyWithoutEmployeesInput } from "../inputs/OrganizationCreateNestedManyWithoutEmployeesInput";
import { OrganizationCreateNestedManyWithoutOwnerInput } from "../inputs/OrganizationCreateNestedManyWithoutOwnerInput";
import { PostCommentCreateNestedManyWithoutCreatorInput } from "../inputs/PostCommentCreateNestedManyWithoutCreatorInput";
import { PostCommentCreateNestedManyWithoutLikersInput } from "../inputs/PostCommentCreateNestedManyWithoutLikersInput";
import { PostCreateNestedManyWithoutLikersInput } from "../inputs/PostCreateNestedManyWithoutLikersInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { TokenPairCreateNestedManyWithoutUserInput } from "../inputs/TokenPairCreateNestedManyWithoutUserInput";
import { UserProfileCreateNestedOneWithoutUserInput } from "../inputs/UserProfileCreateNestedOneWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isLocal?: boolean | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "user" | "staff" | "admin" | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  count?: number | undefined;

  @TypeGraphQL.Field(_type => TokenPairCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  tokens?: TokenPairCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  sessions?: SessionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => OrganizationCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => OrganizationCreateNestedManyWithoutEmployeesInput, {
    nullable: true
  })
  joinedOrganizations?: OrganizationCreateNestedManyWithoutEmployeesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutLikersInput, {
    nullable: true
  })
  likedPosts?: PostCreateNestedManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedManyWithoutLikersInput, {
    nullable: true
  })
  likedComments?: PostCommentCreateNestedManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  createdPostComments?: PostCommentCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => FollowingCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  following?: FollowingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowerCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  followers?: FollowerCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => LabelCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  createdLabels?: LabelCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => HashtagCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  createdHashtags?: HashtagCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => ErrorCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  errors?: ErrorCreateNestedManyWithoutUserInput | undefined;
}
