import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairWhereInput } from "../../../inputs/TokenPairWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTokenPairArgs {
  @TypeGraphQL.Field(_type => TokenPairWhereInput, {
    nullable: true
  })
  where?: TokenPairWhereInput | undefined;
}
