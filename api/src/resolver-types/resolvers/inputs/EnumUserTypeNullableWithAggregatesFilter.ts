import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUserTypeNullableFilter } from "../inputs/NestedEnumUserTypeNullableFilter";
import { NestedEnumUserTypeNullableWithAggregatesFilter } from "../inputs/NestedEnumUserTypeNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { UserType } from "../../enums/UserType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumUserTypeNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumUserTypeNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUserTypeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserTypeNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumUserTypeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserTypeNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumUserTypeNullableFilter | undefined;
}
