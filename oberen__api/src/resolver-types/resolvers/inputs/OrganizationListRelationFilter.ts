import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationWhereInput } from "../inputs/OrganizationWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationListRelationFilter {
  @TypeGraphQL.Field(_type => OrganizationWhereInput, {
    nullable: true
  })
  every?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrganizationWhereInput, {
    nullable: true
  })
  some?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrganizationWhereInput, {
    nullable: true
  })
  none?: OrganizationWhereInput | undefined;
}
