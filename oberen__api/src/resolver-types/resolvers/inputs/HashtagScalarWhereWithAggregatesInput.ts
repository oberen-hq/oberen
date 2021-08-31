import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [HashtagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: HashtagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: HashtagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: HashtagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  uses?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  creatorId?: StringWithAggregatesFilter | undefined;
}
