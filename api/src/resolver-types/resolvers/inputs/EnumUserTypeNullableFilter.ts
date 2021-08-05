import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUserTypeNullableFilter } from "../inputs/NestedEnumUserTypeNullableFilter";
import { UserType } from "../../enums/UserType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumUserTypeNullableFilter {
  @TypeGraphQL.Field(_type => UserType, {
    nullable: true
  })
  equals?: "LOCAL" | "OAUTH" | undefined;

  @TypeGraphQL.Field(_type => [UserType], {
    nullable: true
  })
  in?: Array<"LOCAL" | "OAUTH"> | undefined;

  @TypeGraphQL.Field(_type => [UserType], {
    nullable: true
  })
  notIn?: Array<"LOCAL" | "OAUTH"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserTypeNullableFilter, {
    nullable: true
  })
  not?: NestedEnumUserTypeNullableFilter | undefined;
}
