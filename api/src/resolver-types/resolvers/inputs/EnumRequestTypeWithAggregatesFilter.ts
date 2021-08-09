import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRequestTypeFilter } from "../inputs/NestedEnumRequestTypeFilter";
import { NestedEnumRequestTypeWithAggregatesFilter } from "../inputs/NestedEnumRequestTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { RequestType } from "../../enums/RequestType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumRequestTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => RequestType, {
    nullable: true
  })
  equals?: "bugReport" | "userReport" | "featureRequest" | "ticket" | undefined;

  @TypeGraphQL.Field(_type => [RequestType], {
    nullable: true
  })
  in?: Array<"bugReport" | "userReport" | "featureRequest" | "ticket"> | undefined;

  @TypeGraphQL.Field(_type => [RequestType], {
    nullable: true
  })
  notIn?: Array<"bugReport" | "userReport" | "featureRequest" | "ticket"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRequestTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRequestTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRequestTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumRequestTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRequestTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumRequestTypeFilter | undefined;
}
