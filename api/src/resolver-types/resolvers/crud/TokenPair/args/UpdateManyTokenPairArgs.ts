import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairUpdateManyMutationInput } from "../../../inputs/TokenPairUpdateManyMutationInput";
import { TokenPairWhereInput } from "../../../inputs/TokenPairWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTokenPairArgs {
  @TypeGraphQL.Field(_type => TokenPairUpdateManyMutationInput, {
    nullable: false
  })
  data!: TokenPairUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TokenPairWhereInput, {
    nullable: true
  })
  where?: TokenPairWhereInput | undefined;
}
