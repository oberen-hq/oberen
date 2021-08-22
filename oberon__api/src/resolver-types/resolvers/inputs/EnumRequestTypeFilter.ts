import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRequestTypeFilter } from "../inputs/NestedEnumRequestTypeFilter";
import { RequestType } from "../../enums/RequestType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumRequestTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumRequestTypeFilter, {
    nullable: true
  })
  not?: NestedEnumRequestTypeFilter | undefined;
}
