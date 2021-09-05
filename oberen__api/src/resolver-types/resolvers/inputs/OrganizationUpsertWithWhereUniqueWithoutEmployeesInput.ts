import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateWithoutEmployeesInput } from "../inputs/OrganizationCreateWithoutEmployeesInput";
import { OrganizationUpdateWithoutEmployeesInput } from "../inputs/OrganizationUpdateWithoutEmployeesInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationUpsertWithWhereUniqueWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => OrganizationWhereUniqueInput, {
    nullable: false
  })
  where!: OrganizationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrganizationUpdateWithoutEmployeesInput, {
    nullable: false
  })
  update!: OrganizationUpdateWithoutEmployeesInput;

  @TypeGraphQL.Field(_type => OrganizationCreateWithoutEmployeesInput, {
    nullable: false
  })
  create!: OrganizationCreateWithoutEmployeesInput;
}
