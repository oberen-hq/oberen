import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairCreateManyInput } from "../../../inputs/TokenPairCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTokenPairArgs {
  @TypeGraphQL.Field(_type => [TokenPairCreateManyInput], {
    nullable: false
  })
  data!: TokenPairCreateManyInput[];
}
