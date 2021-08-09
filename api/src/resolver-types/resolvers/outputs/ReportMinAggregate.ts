import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportSeverity } from "../../enums/BugReportSeverity";
import { ReportStatus } from "../../enums/ReportStatus";
import { RequestType } from "../../enums/RequestType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ReportMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => BugReportSeverity, {
    nullable: true
  })
  severity!: "catastrophic" | "critical" | "high" | "medium" | "low" | "info" | null;

  @TypeGraphQL.Field(_type => RequestType, {
    nullable: true
  })
  type!: "bugReport" | "userReport" | "featureRequest" | "ticket" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  creatorId!: string | null;

  @TypeGraphQL.Field(_type => ReportStatus, {
    nullable: true
  })
  status!: "pending" | "recieved" | "rejected" | "accepted" | null;
}
