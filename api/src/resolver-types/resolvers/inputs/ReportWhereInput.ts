import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentListRelationFilter } from "../inputs/AttachmentListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBugReportSeverityFilter } from "../inputs/EnumBugReportSeverityFilter";
import { EnumReportStatusFilter } from "../inputs/EnumReportStatusFilter";
import { EnumRequestTypeFilter } from "../inputs/EnumRequestTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportWhereInput {
  @TypeGraphQL.Field(_type => [ReportWhereInput], {
    nullable: true
  })
  AND?: ReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereInput], {
    nullable: true
  })
  OR?: ReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereInput], {
    nullable: true
  })
  NOT?: ReportWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  creator?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creatorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AttachmentListRelationFilter, {
    nullable: true
  })
  attachments?: AttachmentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReportStatusFilter, {
    nullable: true
  })
  status?: EnumReportStatusFilter | undefined;
}
