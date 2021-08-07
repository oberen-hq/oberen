import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStatusFilter } from "../inputs/NestedEnumStatusFilter";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumStatusFilter {
  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  equals?: "online" | "idle" | "dnd" | "other" | "offline" | undefined;

  @TypeGraphQL.Field(_type => [Status], {
    nullable: true
  })
  in?: Array<"online" | "idle" | "dnd" | "other" | "offline"> | undefined;

  @TypeGraphQL.Field(_type => [Status], {
    nullable: true
  })
  notIn?: Array<"online" | "idle" | "dnd" | "other" | "offline"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStatusFilter, {
    nullable: true
  })
  not?: NestedEnumStatusFilter | undefined;
}
