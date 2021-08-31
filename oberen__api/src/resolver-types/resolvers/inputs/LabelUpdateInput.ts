import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutLabelsInput } from "../inputs/PostUpdateManyWithoutLabelsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateOneRequiredWithoutLabelsInput } from "../inputs/UserProfileUpdateOneRequiredWithoutLabelsInput";
import { UserUpdateOneRequiredWithoutCreatedLabelsInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedLabelsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelUpdateInput {
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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  color?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatedLabelsInput, {
    nullable: true
  })
  creator?: UserUpdateOneRequiredWithoutCreatedLabelsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutLabelsInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneRequiredWithoutLabelsInput, {
    nullable: true
  })
  profile?: UserProfileUpdateOneRequiredWithoutLabelsInput | undefined;
}
