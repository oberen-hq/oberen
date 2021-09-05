import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorScalarWhereInput } from "../inputs/ErrorScalarWhereInput";
import { ErrorUpdateManyMutationInput } from "../inputs/ErrorUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ErrorScalarWhereInput, {
    nullable: false
  })
  where!: ErrorScalarWhereInput;

  @TypeGraphQL.Field(_type => ErrorUpdateManyMutationInput, {
    nullable: false
  })
  data!: ErrorUpdateManyMutationInput;
}
