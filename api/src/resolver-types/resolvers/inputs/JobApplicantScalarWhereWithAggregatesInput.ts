import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class JobApplicantScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [JobApplicantScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: JobApplicantScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobApplicantScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: JobApplicantScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobApplicantScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: JobApplicantScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;
}
