import * as TypeGraphQL from "type-graphql";

export enum TokenPairScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  accessToken = "accessToken",
  refreshToken = "refreshToken",
  userId = "userId",
  isExpired = "isExpired"
}
TypeGraphQL.registerEnumType(TokenPairScalarFieldEnum, {
  name: "TokenPairScalarFieldEnum",
  description: undefined,
});
