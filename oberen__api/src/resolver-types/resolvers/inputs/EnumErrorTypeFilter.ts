import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumErrorTypeFilter } from "../inputs/NestedEnumErrorTypeFilter";
import { ErrorType } from "../../enums/ErrorType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumErrorTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumErrorTypeFilter, {
    nullable: true
  })
  not?: NestedEnumErrorTypeFilter | undefined;
}
