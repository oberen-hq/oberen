import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedPostsInput } from "../inputs/UserCreateWithoutLikedPostsInput";
import { UserUpdateWithoutLikedPostsInput } from "../inputs/UserUpdateWithoutLikedPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutLikedPostsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedPostsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikedPostsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedPostsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedPostsInput;
}
