import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenPairCreateWithoutUserInput } from "../inputs/TokenPairCreateWithoutUserInput";
import { TokenPairWhereUniqueInput } from "../inputs/TokenPairWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenPairCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => TokenPairWhereUniqueInput, {
    nullable: false
  })
  where!: TokenPairWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenPairCreateWithoutUserInput, {
    nullable: false
  })
  create!: TokenPairCreateWithoutUserInput;
}
