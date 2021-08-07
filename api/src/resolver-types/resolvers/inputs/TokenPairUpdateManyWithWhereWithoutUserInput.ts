import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenPairScalarWhereInput } from "../inputs/TokenPairScalarWhereInput";
import { TokenPairUpdateManyMutationInput } from "../inputs/TokenPairUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenPairUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => TokenPairScalarWhereInput, {
    nullable: false
  })
  where!: TokenPairScalarWhereInput;

  @TypeGraphQL.Field(_type => TokenPairUpdateManyMutationInput, {
    nullable: false
  })
  data!: TokenPairUpdateManyMutationInput;
}
