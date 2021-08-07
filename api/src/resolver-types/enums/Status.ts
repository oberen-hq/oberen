import * as TypeGraphQL from "type-graphql";

export enum Status {
  online = "online",
  idle = "idle",
  dnd = "dnd",
  other = "other",
  offline = "offline"
}
TypeGraphQL.registerEnumType(Status, {
  name: "Status",
  description: undefined,
});
