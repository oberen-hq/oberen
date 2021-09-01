import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairOrderByInput } from "../../../inputs/TokenPairOrderByInput";
import { TokenPairWhereInput } from "../../../inputs/TokenPairWhereInput";
import { TokenPairWhereUniqueInput } from "../../../inputs/TokenPairWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTokenPairArgs {
  @TypeGraphQL.Field(_type => TokenPairWhereInput, {
    nullable: true
  })
  where?: TokenPairWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TokenPairOrderByInput], {
    nullable: true
  })
  orderBy?: TokenPairOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenPairWhereUniqueInput, {
    nullable: true
  })
  cursor?: TokenPairWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
