import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumRoleNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumRoleNullableFilter, {
    nullable: true
  })
  not?: NestedEnumRoleNullableFilter | undefined;
}
