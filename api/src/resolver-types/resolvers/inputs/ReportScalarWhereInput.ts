import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBugReportSeverityFilter } from "../inputs/EnumBugReportSeverityFilter";
import { EnumReportStatusFilter } from "../inputs/EnumReportStatusFilter";
import { EnumRequestTypeFilter } from "../inputs/EnumRequestTypeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReportScalarWhereInput], {
    nullable: true
  })
  AND?: ReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereInput], {
    nullable: true
  })
  OR?: ReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereInput], {
    nullable: true
  })
  NOT?: ReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBugReportSeverityFilter, {
    nullable: true
  })
  severity?: EnumBugReportSeverityFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRequestTypeFilter, {
    nullable: true
  })
  type?: EnumRequestTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creatorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReportStatusFilter, {
    nullable: true
  })
  status?: EnumReportStatusFilter | undefined;
}
