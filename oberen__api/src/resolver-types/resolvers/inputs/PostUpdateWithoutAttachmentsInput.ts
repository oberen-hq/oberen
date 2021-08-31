import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPostTypeFieldUpdateOperationsInput } from "../inputs/EnumPostTypeFieldUpdateOperationsInput";
import { HashtagUpdateManyWithoutPostsInput } from "../inputs/HashtagUpdateManyWithoutPostsInput";
import { LabelUpdateManyWithoutPostsInput } from "../inputs/LabelUpdateManyWithoutPostsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostCommentUpdateManyWithoutPostInput } from "../inputs/PostCommentUpdateManyWithoutPostInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutLikedPostsInput } from "../inputs/UserUpdateManyWithoutLikedPostsInput";
import { UserUpdateOneRequiredWithoutPostsInput } from "../inputs/UserUpdateOneRequiredWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateWithoutAttachmentsInput {
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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPostTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumPostTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  likes?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedPostsInput, {
    nullable: true
  })
  likers?: UserUpdateManyWithoutLikedPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutPostInput, {
    nullable: true
  })
  comments?: PostCommentUpdateManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => HashtagUpdateManyWithoutPostsInput, {
    nullable: true
  })
  hashtags?: HashtagUpdateManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LabelUpdateManyWithoutPostsInput, {
    nullable: true
  })
  labels?: LabelUpdateManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput, {
    nullable: true
  })
  creator?: UserUpdateOneRequiredWithoutPostsInput | undefined;
}
