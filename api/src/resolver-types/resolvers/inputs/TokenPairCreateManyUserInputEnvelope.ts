import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenPairCreateManyUserInput } from "../inputs/TokenPairCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenPairCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TokenPairCreateManyUserInput], {
    nullable: false
  })
  data!: TokenPairCreateManyUserInput[];
}
