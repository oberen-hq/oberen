import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumConnectionServiceFilter } from "../inputs/NestedEnumConnectionServiceFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ConnectionService } from "../../enums/ConnectionService";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumConnectionServiceWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ConnectionService, {
    nullable: true
  })
  equals?: "github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin" | "local" | undefined;

  @TypeGraphQL.Field(_type => [ConnectionService], {
    nullable: true
  })
  in?: Array<"github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin" | "local"> | undefined;

  @TypeGraphQL.Field(_type => [ConnectionService], {
    nullable: true
  })
  notIn?: Array<"github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin" | "local"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumConnectionServiceWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumConnectionServiceWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumConnectionServiceFilter, {
    nullable: true
  })
  _min?: NestedEnumConnectionServiceFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumConnectionServiceFilter, {
    nullable: true
  })
  _max?: NestedEnumConnectionServiceFilter | undefined;
}
