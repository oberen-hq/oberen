import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ErrorUpdateManyWithoutUserInput } from "../inputs/ErrorUpdateManyWithoutUserInput";
import { FollowerUpdateManyWithoutUserInput } from "../inputs/FollowerUpdateManyWithoutUserInput";
import { FollowingUpdateManyWithoutUserInput } from "../inputs/FollowingUpdateManyWithoutUserInput";
import { HashtagUpdateManyWithoutCreatorInput } from "../inputs/HashtagUpdateManyWithoutCreatorInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LabelUpdateManyWithoutCreatorInput } from "../inputs/LabelUpdateManyWithoutCreatorInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableEnumRoleFieldUpdateOperationsInput } from "../inputs/NullableEnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrganizationUpdateManyWithoutEmployeesInput } from "../inputs/OrganizationUpdateManyWithoutEmployeesInput";
import { OrganizationUpdateManyWithoutOwnerInput } from "../inputs/OrganizationUpdateManyWithoutOwnerInput";
import { PostCommentUpdateManyWithoutCreatorInput } from "../inputs/PostCommentUpdateManyWithoutCreatorInput";
import { PostCommentUpdateManyWithoutLikersInput } from "../inputs/PostCommentUpdateManyWithoutLikersInput";
import { PostUpdateManyWithoutCreatorInput } from "../inputs/PostUpdateManyWithoutCreatorInput";
import { PostUpdateManyWithoutLikersInput } from "../inputs/PostUpdateManyWithoutLikersInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TokenPairUpdateManyWithoutUserInput } from "../inputs/TokenPairUpdateManyWithoutUserInput";
import { UserProfileUpdateOneWithoutUserInput } from "../inputs/UserProfileUpdateOneWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  displayName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isLocal?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: NullableEnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  count?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TokenPairUpdateManyWithoutUserInput, {
    nullable: true
  })
  tokens?: TokenPairUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput, {
    nullable: true
  })
  sessions?: SessionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => OrganizationUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  ownedOrganizations?: OrganizationUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => OrganizationUpdateManyWithoutEmployeesInput, {
    nullable: true
  })
  joinedOrganizations?: OrganizationUpdateManyWithoutEmployeesInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutLikersInput, {
    nullable: true
  })
  likedPosts?: PostUpdateManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutLikersInput, {
    nullable: true
  })
  likedComments?: PostCommentUpdateManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  createdPostComments?: PostCommentUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => FollowingUpdateManyWithoutUserInput, {
    nullable: true
  })
  following?: FollowingUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowerUpdateManyWithoutUserInput, {
    nullable: true
  })
  followers?: FollowerUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => LabelUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  createdLabels?: LabelUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => HashtagUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  createdHashtags?: HashtagUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => ErrorUpdateManyWithoutUserInput, {
    nullable: true
  })
  errors?: ErrorUpdateManyWithoutUserInput | undefined;
}
