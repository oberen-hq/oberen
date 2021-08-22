import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBugReportSeverityWithAggregatesFilter } from "../inputs/EnumBugReportSeverityWithAggregatesFilter";
import { EnumReportStatusWithAggregatesFilter } from "../inputs/EnumReportStatusWithAggregatesFilter";
import { EnumRequestTypeWithAggregatesFilter } from "../inputs/EnumRequestTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBugReportSeverityWithAggregatesFilter, {
    nullable: true
  })
  severity?: EnumBugReportSeverityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRequestTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumRequestTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  creatorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReportStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumReportStatusWithAggregatesFilter | undefined;
}
