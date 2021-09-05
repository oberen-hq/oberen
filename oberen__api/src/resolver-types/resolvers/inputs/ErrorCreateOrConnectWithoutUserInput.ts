import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorCreateWithoutUserInput } from "../inputs/ErrorCreateWithoutUserInput";
import { ErrorWhereUniqueInput } from "../inputs/ErrorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ErrorWhereUniqueInput, {
    nullable: false
  })
  where!: ErrorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ErrorCreateWithoutUserInput, {
    nullable: false
  })
  create!: ErrorCreateWithoutUserInput;
}
