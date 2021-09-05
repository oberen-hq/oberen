import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationScalarWhereInput } from "../inputs/OrganizationScalarWhereInput";
import { OrganizationUpdateManyMutationInput } from "../inputs/OrganizationUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationUpdateManyWithWhereWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => OrganizationScalarWhereInput, {
    nullable: false
  })
  where!: OrganizationScalarWhereInput;

  @TypeGraphQL.Field(_type => OrganizationUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrganizationUpdateManyMutationInput;
}
