import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumErrorTypeFilter } from "../inputs/NestedEnumErrorTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ErrorType } from "../../enums/ErrorType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumErrorTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ErrorType, {
    nullable: true
  })
  equals?: "internal" | "authentication" | "timeout" | "unavailable" | undefined;

  @TypeGraphQL.Field(_type => [ErrorType], {
    nullable: true
  })
  in?: Array<"internal" | "authentication" | "timeout" | "unavailable"> | undefined;

  @TypeGraphQL.Field(_type => [ErrorType], {
    nullable: true
  })
  notIn?: Array<"internal" | "authentication" | "timeout" | "unavailable"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumErrorTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumErrorTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumErrorTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumErrorTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumErrorTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumErrorTypeFilter | undefined;
}
