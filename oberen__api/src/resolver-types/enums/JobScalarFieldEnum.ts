import * as TypeGraphQL from "type-graphql";

export enum JobScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(JobScalarFieldEnum, {
  name: "JobScalarFieldEnum",
  description: undefined,
});
