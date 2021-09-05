import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationUpdateWithoutEmployeesInput } from "../inputs/OrganizationUpdateWithoutEmployeesInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationUpdateWithWhereUniqueWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => OrganizationWhereUniqueInput, {
    nullable: false
  })
  where!: OrganizationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrganizationUpdateWithoutEmployeesInput, {
    nullable: false
  })
  data!: OrganizationUpdateWithoutEmployeesInput;
}
