import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedPostCommentsInput } from "../inputs/UserCreateWithoutCreatedPostCommentsInput";
import { UserUpdateWithoutCreatedPostCommentsInput } from "../inputs/UserUpdateWithoutCreatedPostCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCreatedPostCommentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedPostCommentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedPostCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedPostCommentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedPostCommentsInput;
}
