import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserType } from "../../enums/UserType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NullableEnumUserTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => UserType, {
    nullable: true
  })
  set?: "LOCAL" | "OAUTH" | undefined;
}
