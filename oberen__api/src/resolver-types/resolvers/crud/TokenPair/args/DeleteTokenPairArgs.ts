import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairWhereUniqueInput } from "../../../inputs/TokenPairWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTokenPairArgs {
  @TypeGraphQL.Field(_type => TokenPairWhereUniqueInput, {
    nullable: false
  })
  where!: TokenPairWhereUniqueInput;
}
