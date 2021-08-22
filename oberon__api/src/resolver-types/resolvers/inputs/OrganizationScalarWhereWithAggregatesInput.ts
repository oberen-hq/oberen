import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OrganizationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OrganizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OrganizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OrganizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;
}
