import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorType } from "../../enums/ErrorType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumErrorTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ErrorType, {
    nullable: true
  })
  set?: "internal" | "authentication" | "timeout" | "unavailable" | undefined;
}
