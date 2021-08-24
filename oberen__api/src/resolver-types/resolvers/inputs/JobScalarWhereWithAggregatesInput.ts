import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class JobScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [JobScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: JobScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: JobScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: JobScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;
}
