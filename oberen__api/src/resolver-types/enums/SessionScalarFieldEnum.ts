import * as TypeGraphQL from "type-graphql";

export enum SessionScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  provider = "provider",
  device = "device",
  userAgent = "userAgent",
  ip = "ip",
  lastLogged = "lastLogged",
  userId = "userId",
  isCurrent = "isCurrent"
}
TypeGraphQL.registerEnumType(SessionScalarFieldEnum, {
  name: "SessionScalarFieldEnum",
  description: undefined,
});
