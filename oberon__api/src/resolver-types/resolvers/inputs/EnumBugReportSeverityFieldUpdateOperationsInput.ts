import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportSeverity } from "../../enums/BugReportSeverity";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumBugReportSeverityFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BugReportSeverity, {
    nullable: true
  })
  set?: "catastrophic" | "critical" | "high" | "medium" | "low" | "info" | undefined;
}
