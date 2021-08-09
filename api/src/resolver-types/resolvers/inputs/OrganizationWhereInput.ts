import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationWhereInput {
  @TypeGraphQL.Field(_type => [OrganizationWhereInput], {
    nullable: true
  })
  AND?: OrganizationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationWhereInput], {
    nullable: true
  })
  OR?: OrganizationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationWhereInput], {
    nullable: true
  })
  NOT?: OrganizationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;
}
