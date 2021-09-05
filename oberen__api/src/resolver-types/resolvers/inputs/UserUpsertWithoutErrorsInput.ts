import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutErrorsInput } from "../inputs/UserCreateWithoutErrorsInput";
import { UserUpdateWithoutErrorsInput } from "../inputs/UserUpdateWithoutErrorsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutErrorsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutErrorsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutErrorsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutErrorsInput, {
    nullable: false
  })
  create!: UserCreateWithoutErrorsInput;
}
