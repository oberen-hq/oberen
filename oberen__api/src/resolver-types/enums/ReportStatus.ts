import * as TypeGraphQL from "type-graphql";

export enum ReportStatus {
  pending = "pending",
  recieved = "recieved",
  rejected = "rejected",
  accepted = "accepted"
}
TypeGraphQL.registerEnumType(ReportStatus, {
  name: "ReportStatus",
  description: undefined,
});
