import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairOrderByInput } from "../../../inputs/TokenPairOrderByInput";
import { TokenPairWhereInput } from "../../../inputs/TokenPairWhereInput";
import { TokenPairWhereUniqueInput } from "../../../inputs/TokenPairWhereUniqueInput";
import { TokenPairScalarFieldEnum } from "../../../../enums/TokenPairScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserTokensArgs {
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

  @TypeGraphQL.Field(_type => [TokenPairScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "accessToken" | "refreshToken" | "userId"> | undefined;
}
