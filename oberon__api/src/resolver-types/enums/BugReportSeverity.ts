import * as TypeGraphQL from "type-graphql";

export enum BugReportSeverity {
  catastrophic = "catastrophic",
  critical = "critical",
  high = "high",
  medium = "medium",
  low = "low",
  info = "info"
}
TypeGraphQL.registerEnumType(BugReportSeverity, {
  name: "BugReportSeverity",
  description: undefined,
});
