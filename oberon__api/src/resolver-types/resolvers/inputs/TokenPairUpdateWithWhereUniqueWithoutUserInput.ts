import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenPairUpdateWithoutUserInput } from "../inputs/TokenPairUpdateWithoutUserInput";
import { TokenPairWhereUniqueInput } from "../inputs/TokenPairWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenPairUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TokenPairWhereUniqueInput, {
    nullable: false
  })
  where!: TokenPairWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenPairUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TokenPairUpdateWithoutUserInput;
}
