import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LabelUpdateManyWithoutCreatorInput } from "../inputs/LabelUpdateManyWithoutCreatorInput";
import { NullableEnumRoleFieldUpdateOperationsInput } from "../inputs/NullableEnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OauthConnectionUpdateManyWithoutUserInput } from "../inputs/OauthConnectionUpdateManyWithoutUserInput";
import { PostCommentUpdateManyWithoutCreatorInput } from "../inputs/PostCommentUpdateManyWithoutCreatorInput";
import { PostCommentUpdateManyWithoutLikersInput } from "../inputs/PostCommentUpdateManyWithoutLikersInput";
import { PostUpdateManyWithoutCreatorInput } from "../inputs/PostUpdateManyWithoutCreatorInput";
import { PostUpdateManyWithoutLikersInput } from "../inputs/PostUpdateManyWithoutLikersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateOneWithoutUserInput } from "../inputs/UserProfileUpdateOneWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutTokensInput {
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

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  createdComments?: PostCommentUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutLikersInput, {
    nullable: true
  })
  likedPosts?: PostUpdateManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutLikersInput, {
    nullable: true
  })
  likedComments?: PostCommentUpdateManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => LabelUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  createdLabels?: LabelUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => OauthConnectionUpdateManyWithoutUserInput, {
    nullable: true
  })
  oauthConnections?: OauthConnectionUpdateManyWithoutUserInput | undefined;
}
