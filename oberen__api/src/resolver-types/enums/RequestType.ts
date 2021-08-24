import * as TypeGraphQL from "type-graphql";

export enum RequestType {
  bugReport = "bugReport",
  userReport = "userReport",
  featureRequest = "featureRequest",
  ticket = "ticket"
}
TypeGraphQL.registerEnumType(RequestType, {
  name: "RequestType",
  description: undefined,
});
