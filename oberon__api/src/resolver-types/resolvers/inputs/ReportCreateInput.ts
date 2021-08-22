import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateNestedManyWithoutReportInput } from "../inputs/AttachmentCreateNestedManyWithoutReportInput";
import { CommentCreateNestedManyWithoutReportInput } from "../inputs/CommentCreateNestedManyWithoutReportInput";
import { UserCreateNestedOneWithoutReportsInput } from "../inputs/UserCreateNestedOneWithoutReportsInput";
import { BugReportSeverity } from "../../enums/BugReportSeverity";
import { ReportStatus } from "../../enums/ReportStatus";
import { RequestType } from "../../enums/RequestType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BugReportSeverity, {
    nullable: true
  })
  severity?: "catastrophic" | "critical" | "high" | "medium" | "low" | "info" | undefined;

  @TypeGraphQL.Field(_type => RequestType, {
    nullable: false
  })
  type!: "bugReport" | "userReport" | "featureRequest" | "ticket";

  @TypeGraphQL.Field(_type => ReportStatus, {
    nullable: true
  })
  status?: "pending" | "recieved" | "rejected" | "accepted" | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReportsInput, {
    nullable: false
  })
  creator!: UserCreateNestedOneWithoutReportsInput;

  @TypeGraphQL.Field(_type => AttachmentCreateNestedManyWithoutReportInput, {
    nullable: true
  })
  attachments?: AttachmentCreateNestedManyWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutReportInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutReportInput | undefined;
}
