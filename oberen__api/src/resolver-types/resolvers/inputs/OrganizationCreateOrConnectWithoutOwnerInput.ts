import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateWithoutOwnerInput } from "../inputs/OrganizationCreateWithoutOwnerInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => OrganizationWhereUniqueInput, {
    nullable: false
  })
  where!: OrganizationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrganizationCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: OrganizationCreateWithoutOwnerInput;
}
