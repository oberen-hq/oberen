import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenPairScalarWhereInput {
  @TypeGraphQL.Field(_type => [TokenPairScalarWhereInput], {
    nullable: true
  })
  AND?: TokenPairScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairScalarWhereInput], {
    nullable: true
  })
  OR?: TokenPairScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairScalarWhereInput], {
    nullable: true
  })
  NOT?: TokenPairScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  accessToken?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  refreshToken?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
