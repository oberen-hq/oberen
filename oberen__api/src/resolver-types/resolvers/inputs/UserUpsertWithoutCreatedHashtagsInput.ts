import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedHashtagsInput } from "../inputs/UserCreateWithoutCreatedHashtagsInput";
import { UserUpdateWithoutCreatedHashtagsInput } from "../inputs/UserUpdateWithoutCreatedHashtagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCreatedHashtagsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedHashtagsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedHashtagsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedHashtagsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedHashtagsInput;
}
