import * as TypeGraphQL from "type-graphql";

export enum ReportScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  description = "description",
  severity = "severity",
  type = "type",
  creatorId = "creatorId",
  status = "status"
}
TypeGraphQL.registerEnumType(ReportScalarFieldEnum, {
  name: "ReportScalarFieldEnum",
  description: undefined,
});
