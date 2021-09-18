import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagScalarWhereInput {
  @TypeGraphQL.Field(_type => [HashtagScalarWhereInput], {
    nullable: true
  })
  AND?: HashtagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereInput], {
    nullable: true
  })
  OR?: HashtagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereInput], {
    nullable: true
  })
  NOT?: HashtagScalarWhereInput[] | undefined;

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
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  uses?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creatorId?: StringFilter | undefined;
}
