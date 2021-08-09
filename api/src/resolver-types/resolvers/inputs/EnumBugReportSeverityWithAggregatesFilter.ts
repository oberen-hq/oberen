import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBugReportSeverityFilter } from "../inputs/NestedEnumBugReportSeverityFilter";
import { NestedEnumBugReportSeverityWithAggregatesFilter } from "../inputs/NestedEnumBugReportSeverityWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { BugReportSeverity } from "../../enums/BugReportSeverity";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumBugReportSeverityWithAggregatesFilter {
  @TypeGraphQL.Field(_type => BugReportSeverity, {
    nullable: true
  })
  equals?: "catastrophic" | "critical" | "high" | "medium" | "low" | "info" | undefined;

  @TypeGraphQL.Field(_type => [BugReportSeverity], {
    nullable: true
  })
  in?: Array<"catastrophic" | "critical" | "high" | "medium" | "low" | "info"> | undefined;

  @TypeGraphQL.Field(_type => [BugReportSeverity], {
    nullable: true
  })
  notIn?: Array<"catastrophic" | "critical" | "high" | "medium" | "low" | "info"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugReportSeverityWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBugReportSeverityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugReportSeverityFilter, {
    nullable: true
  })
  _min?: NestedEnumBugReportSeverityFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugReportSeverityFilter, {
    nullable: true
  })
  _max?: NestedEnumBugReportSeverityFilter | undefined;
}
