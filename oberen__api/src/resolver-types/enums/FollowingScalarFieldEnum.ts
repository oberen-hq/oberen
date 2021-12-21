import * as TypeGraphQL from "type-graphql";

export enum FollowingScalarFieldEnum {
  id = "id",
  name = "name",
  avatar = "avatar",
  userId = "userId"
}
TypeGraphQL.registerEnumType(FollowingScalarFieldEnum, {
  name: "FollowingScalarFieldEnum",
  description: undefined,
});
