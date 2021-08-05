import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumRoleFieldUpdateOperationsInput } from "../inputs/NullableEnumRoleFieldUpdateOperationsInput";
import { PostCommentUpdateManyWithoutCreatorInput } from "../inputs/PostCommentUpdateManyWithoutCreatorInput";
import { PostCommentUpdateManyWithoutLikersInput } from "../inputs/PostCommentUpdateManyWithoutLikersInput";
import { PostUpdateManyWithoutUserInput } from "../inputs/PostUpdateManyWithoutUserInput";
import { PostUpdateOneWithoutLikersInput } from "../inputs/PostUpdateOneWithoutLikersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateOneWithoutUserInput } from "../inputs/UserProfileUpdateOneWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutPostsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  userRole?: NullableEnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutUserInput, {
    nullable: true
  })
  likedPosts?: PostUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutLikersInput, {
    nullable: true
  })
  likedComments?: PostCommentUpdateManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  PostComment?: PostCommentUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneWithoutLikersInput, {
    nullable: true
  })
  Post?: PostUpdateOneWithoutLikersInput | undefined;
}
