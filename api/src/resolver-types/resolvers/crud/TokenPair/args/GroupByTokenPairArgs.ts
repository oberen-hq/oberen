import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairOrderByInput } from "../../../inputs/TokenPairOrderByInput";
import { TokenPairScalarWhereWithAggregatesInput } from "../../../inputs/TokenPairScalarWhereWithAggregatesInput";
import { TokenPairWhereInput } from "../../../inputs/TokenPairWhereInput";
import { TokenPairScalarFieldEnum } from "../../../../enums/TokenPairScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTokenPairArgs {
  @TypeGraphQL.Field(_type => TokenPairWhereInput, {
    nullable: true
  })
  where?: TokenPairWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TokenPairOrderByInput], {
    nullable: true
  })
  orderBy?: TokenPairOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "accessToken" | "refreshToken" | "userId" | "isExpired">;

  @TypeGraphQL.Field(_type => TokenPairScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TokenPairScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
