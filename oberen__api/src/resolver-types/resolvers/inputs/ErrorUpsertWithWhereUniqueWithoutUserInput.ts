import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorCreateWithoutUserInput } from "../inputs/ErrorCreateWithoutUserInput";
import { ErrorUpdateWithoutUserInput } from "../inputs/ErrorUpdateWithoutUserInput";
import { ErrorWhereUniqueInput } from "../inputs/ErrorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ErrorWhereUniqueInput, {
    nullable: false
  })
  where!: ErrorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ErrorUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ErrorUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ErrorCreateWithoutUserInput, {
    nullable: false
  })
  create!: ErrorCreateWithoutUserInput;
}
