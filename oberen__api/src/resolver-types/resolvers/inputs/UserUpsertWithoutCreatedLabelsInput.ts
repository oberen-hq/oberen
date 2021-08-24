import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedLabelsInput } from "../inputs/UserCreateWithoutCreatedLabelsInput";
import { UserUpdateWithoutCreatedLabelsInput } from "../inputs/UserUpdateWithoutCreatedLabelsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCreatedLabelsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedLabelsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedLabelsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedLabelsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedLabelsInput;
}
