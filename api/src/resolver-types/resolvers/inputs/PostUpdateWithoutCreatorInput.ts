import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPostTypeFieldUpdateOperationsInput } from "../inputs/EnumPostTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostCommentUpdateManyWithoutPostInput } from "../inputs/PostCommentUpdateManyWithoutPostInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutLikedPostsInput } from "../inputs/UserUpdateManyWithoutLikedPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateWithoutCreatorInput {
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

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedPostsInput, {
    nullable: true
  })
  likers?: UserUpdateManyWithoutLikedPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutPostInput, {
    nullable: true
  })
  comments?: PostCommentUpdateManyWithoutPostInput | undefined;
}
