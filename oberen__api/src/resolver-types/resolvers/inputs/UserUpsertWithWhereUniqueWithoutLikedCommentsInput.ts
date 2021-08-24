import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedCommentsInput } from "../inputs/UserCreateWithoutLikedCommentsInput";
import { UserUpdateWithoutLikedCommentsInput } from "../inputs/UserUpdateWithoutLikedCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutLikedCommentsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedCommentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikedCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedCommentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedCommentsInput;
}
