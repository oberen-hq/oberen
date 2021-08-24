import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairCreateInput } from "../../../inputs/TokenPairCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTokenPairArgs {
  @TypeGraphQL.Field(_type => TokenPairCreateInput, {
    nullable: false
  })
  data!: TokenPairCreateInput;
}
