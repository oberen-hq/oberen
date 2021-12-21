import * as TypeGraphQL from "type-graphql";

export enum FollowerScalarFieldEnum {
  id = "id",
  name = "name",
  avatar = "avatar",
  userId = "userId"
}
TypeGraphQL.registerEnumType(FollowerScalarFieldEnum, {
  name: "FollowerScalarFieldEnum",
  description: undefined,
});
