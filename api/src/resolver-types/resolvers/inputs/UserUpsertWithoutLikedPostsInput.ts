import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedPostsInput } from "../inputs/UserCreateWithoutLikedPostsInput";
import { UserUpdateWithoutLikedPostsInput } from "../inputs/UserUpdateWithoutLikedPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutLikedPostsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedPostsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikedPostsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedPostsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedPostsInput;
}
