import * as TypeGraphQL from "type-graphql";

export enum ErrorType {
  internal = "internal",
  authentication = "authentication",
  timeout = "timeout",
  unavailable = "unavailable"
}
TypeGraphQL.registerEnumType(ErrorType, {
  name: "ErrorType",
  description: undefined,
});
