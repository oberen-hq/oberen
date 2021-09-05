import * as TypeGraphQL from "type-graphql";

export enum OrganizationScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId"
}
TypeGraphQL.registerEnumType(OrganizationScalarFieldEnum, {
  name: "OrganizationScalarFieldEnum",
  description: undefined,
});
