import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShiftScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ShiftScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ShiftScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShiftScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ShiftScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShiftScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ShiftScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;
}