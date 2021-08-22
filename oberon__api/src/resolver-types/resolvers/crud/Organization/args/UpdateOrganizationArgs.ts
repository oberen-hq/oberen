import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationUpdateInput } from "../../../inputs/OrganizationUpdateInput";
import { OrganizationWhereUniqueInput } from "../../../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOrganizationArgs {
  @TypeGraphQL.Field(_type => OrganizationUpdateInput, {
    nullable: false
  })
  data!: OrganizationUpdateInput;

  @TypeGraphQL.Field(_type => OrganizationWhereUniqueInput, {
    nullable: false
  })
  where!: OrganizationWhereUniqueInput;
}
