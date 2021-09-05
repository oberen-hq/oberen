import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateOrConnectWithoutEmployeesInput } from "../inputs/OrganizationCreateOrConnectWithoutEmployeesInput";
import { OrganizationCreateWithoutEmployeesInput } from "../inputs/OrganizationCreateWithoutEmployeesInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationCreateNestedManyWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => [OrganizationCreateWithoutEmployeesInput], {
    nullable: true
  })
  create?: OrganizationCreateWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationCreateOrConnectWithoutEmployeesInput], {
    nullable: true
  })
  connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput], {
    nullable: true
  })
  connect?: OrganizationWhereUniqueInput[] | undefined;
}
