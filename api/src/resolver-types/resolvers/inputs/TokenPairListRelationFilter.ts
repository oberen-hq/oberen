import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenPairWhereInput } from "../inputs/TokenPairWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenPairListRelationFilter {
  @TypeGraphQL.Field(_type => TokenPairWhereInput, {
    nullable: true
  })
  every?: TokenPairWhereInput | undefined;

  @TypeGraphQL.Field(_type => TokenPairWhereInput, {
    nullable: true
  })
  some?: TokenPairWhereInput | undefined;

  @TypeGraphQL.Field(_type => TokenPairWhereInput, {
    nullable: true
  })
  none?: TokenPairWhereInput | undefined;
}
