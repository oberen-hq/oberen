import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedCommentsInput } from "../inputs/UserCreateWithoutCreatedCommentsInput";
import { UserUpdateWithoutCreatedCommentsInput } from "../inputs/UserUpdateWithoutCreatedCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCreatedCommentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedCommentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedCommentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedCommentsInput;
}
