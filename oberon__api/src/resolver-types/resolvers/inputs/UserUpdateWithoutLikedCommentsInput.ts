import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentUpdateManyWithoutCreatorInput } from "../inputs/CommentUpdateManyWithoutCreatorInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LabelUpdateManyWithoutCreatorInput } from "../inputs/LabelUpdateManyWithoutCreatorInput";
import { NullableEnumRoleFieldUpdateOperationsInput } from "../inputs/NullableEnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OauthConnectionUpdateManyWithoutUserInput } from "../inputs/OauthConnectionUpdateManyWithoutUserInput";
import { PostUpdateManyWithoutCreatorInput } from "../inputs/PostUpdateManyWithoutCreatorInput";
import { PostUpdateManyWithoutLikersInput } from "../inputs/PostUpdateManyWithoutLikersInput";
import { ReportUpdateManyWithoutCreatorInput } from "../inputs/ReportUpdateManyWithoutCreatorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TokenPairUpdateManyWithoutUserInput } from "../inputs/TokenPairUpdateManyWithoutUserInput";
import { UserProfileUpdateOneWithoutUserInput } from "../inputs/UserProfileUpdateOneWithoutUserInput";
import { UserUpdateManyWithoutFollowersInput } from "../inputs/UserUpdateManyWithoutFollowersInput";
import { UserUpdateManyWithoutFollowingInput } from "../inputs/UserUpdateManyWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutLikedCommentsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isLocal?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  displayName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  userRole?: NullableEnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  createdComments?: CommentUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutLikersInput, {
    nullable: true
  })
  likedPosts?: PostUpdateManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserUpdateManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowingInput, {
    nullable: true
  })
  followers?: UserUpdateManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => LabelUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  createdLabels?: LabelUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  reports?: ReportUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => OauthConnectionUpdateManyWithoutUserInput, {
    nullable: true
  })
  oauthConnections?: OauthConnectionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TokenPairUpdateManyWithoutUserInput, {
    nullable: true
  })
  tokens?: TokenPairUpdateManyWithoutUserInput | undefined;
}
