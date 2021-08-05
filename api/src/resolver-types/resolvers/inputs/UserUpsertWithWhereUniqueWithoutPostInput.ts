import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostInput } from "../inputs/UserCreateWithoutPostInput";
import { UserUpdateWithoutPostInput } from "../inputs/UserUpdateWithoutPostInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPostInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostInput;
}
