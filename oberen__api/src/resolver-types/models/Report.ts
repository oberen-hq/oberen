import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Attachment } from "../models/Attachment";
import { Comment } from "../models/Comment";
import { User } from "../models/User";
import { BugReportSeverity } from "../enums/BugReportSeverity";
import { ReportStatus } from "../enums/ReportStatus";
import { RequestType } from "../enums/RequestType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Report {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BugReportSeverity, {
    nullable: false
  })
  severity!: "catastrophic" | "critical" | "high" | "medium" | "low" | "info";

  @TypeGraphQL.Field(_type => RequestType, {
    nullable: false
  })
  type!: "bugReport" | "userReport" | "featureRequest" | "ticket";

  creator?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creatorId!: string;

  attachments?: Attachment[];

  comments?: Comment[];

  @TypeGraphQL.Field(_type => ReportStatus, {
    nullable: false
  })
  status!: "pending" | "recieved" | "rejected" | "accepted";
}
