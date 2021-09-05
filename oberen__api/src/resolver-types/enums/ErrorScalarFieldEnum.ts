import * as TypeGraphQL from "type-graphql";

export enum ErrorScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  type = "type",
  route = "route",
  description = "description",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ErrorScalarFieldEnum, {
  name: "ErrorScalarFieldEnum",
  description: undefined,
});
