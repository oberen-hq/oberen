import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LabelUpdateManyWithoutProfileInput } from "../inputs/LabelUpdateManyWithoutProfileInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutProfileInput } from "../inputs/UserUpdateOneWithoutProfileInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatarUrl?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutProfileInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => LabelUpdateManyWithoutProfileInput, {
    nullable: true
  })
  labels?: LabelUpdateManyWithoutProfileInput | undefined;
}
