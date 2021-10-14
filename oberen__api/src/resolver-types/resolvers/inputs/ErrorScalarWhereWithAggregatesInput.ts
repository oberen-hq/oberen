import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumErrorTypeWithAggregatesFilter } from "../inputs/EnumErrorTypeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ErrorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ErrorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ErrorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ErrorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumErrorTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumErrorTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  route?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
