import * as TypeGraphQL from "type-graphql";

export enum ShiftScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ShiftScalarFieldEnum, {
  name: "ShiftScalarFieldEnum",
  description: undefined,
});
