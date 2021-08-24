import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairUpdateInput } from "../../../inputs/TokenPairUpdateInput";
import { TokenPairWhereUniqueInput } from "../../../inputs/TokenPairWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTokenPairArgs {
  @TypeGraphQL.Field(_type => TokenPairUpdateInput, {
    nullable: false
  })
  data!: TokenPairUpdateInput;

  @TypeGraphQL.Field(_type => TokenPairWhereUniqueInput, {
    nullable: false
  })
  where!: TokenPairWhereUniqueInput;
}
