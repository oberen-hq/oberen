import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRoleNullableFilter } from "../inputs/NestedEnumRoleNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumRoleNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  equals?: "user" | "staff" | "admin" | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  in?: Array<"user" | "staff" | "admin"> | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  notIn?: Array<"user" | "staff" | "admin"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRoleNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumRoleNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumRoleNullableFilter | undefined;
}
