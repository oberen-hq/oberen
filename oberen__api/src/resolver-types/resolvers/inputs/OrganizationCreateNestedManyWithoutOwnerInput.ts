import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateManyOwnerInputEnvelope } from "../inputs/OrganizationCreateManyOwnerInputEnvelope";
import { OrganizationCreateOrConnectWithoutOwnerInput } from "../inputs/OrganizationCreateOrConnectWithoutOwnerInput";
import { OrganizationCreateWithoutOwnerInput } from "../inputs/OrganizationCreateWithoutOwnerInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [OrganizationCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: OrganizationCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => OrganizationCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: OrganizationCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput], {
    nullable: true
  })
  connect?: OrganizationWhereUniqueInput[] | undefined;
}
