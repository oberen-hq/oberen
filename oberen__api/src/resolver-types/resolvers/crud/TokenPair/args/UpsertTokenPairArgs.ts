import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairCreateInput } from "../../../inputs/TokenPairCreateInput";
import { TokenPairUpdateInput } from "../../../inputs/TokenPairUpdateInput";
import { TokenPairWhereUniqueInput } from "../../../inputs/TokenPairWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTokenPairArgs {
  @TypeGraphQL.Field(_type => TokenPairWhereUniqueInput, {
    nullable: false
  })
  where!: TokenPairWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenPairCreateInput, {
    nullable: false
  })
  create!: TokenPairCreateInput;

  @TypeGraphQL.Field(_type => TokenPairUpdateInput, {
    nullable: false
  })
  update!: TokenPairUpdateInput;
}
