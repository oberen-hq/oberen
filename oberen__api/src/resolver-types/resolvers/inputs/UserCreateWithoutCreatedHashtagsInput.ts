import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorCreateNestedManyWithoutUserInput } from "../inputs/ErrorCreateNestedManyWithoutUserInput";
import { LabelCreateNestedManyWithoutCreatorInput } from "../inputs/LabelCreateNestedManyWithoutCreatorInput";
import { OrganizationCreateNestedManyWithoutEmployeesInput } from "../inputs/OrganizationCreateNestedManyWithoutEmployeesInput";
import { OrganizationCreateNestedManyWithoutOwnerInput } from "../inputs/OrganizationCreateNestedManyWithoutOwnerInput";
import { PostCommentCreateNestedManyWithoutCreatorInput } from "../inputs/PostCommentCreateNestedManyWithoutCreatorInput";
import { PostCommentCreateNestedManyWithoutLikersInput } from "../inputs/PostCommentCreateNestedManyWithoutLikersInput";
import { PostCreateNestedManyWithoutCreatorInput } from "../inputs/PostCreateNestedManyWithoutCreatorInput";
import { PostCreateNestedManyWithoutLikersInput } from "../inputs/PostCreateNestedManyWithoutLikersInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { TokenPairCreateNestedManyWithoutUserInput } from "../inputs/TokenPairCreateNestedManyWithoutUserInput";
import { UserCreateNestedManyWithoutFollowersInput } from "../inputs/UserCreateNestedManyWithoutFollowersInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";
import { UserProfileCreateNestedOneWithoutUserInput } from "../inputs/UserProfileCreateNestedOneWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutCreatedHashtagsInput {
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

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutCreatorInput | undefined;

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

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserCreateNestedManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  followers?: UserCreateNestedManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => LabelCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  createdLabels?: LabelCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => ErrorCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  errors?: ErrorCreateNestedManyWithoutUserInput | undefined;
}
