import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationCreateInput } from "../../../inputs/OrganizationCreateInput";
import { OrganizationUpdateInput } from "../../../inputs/OrganizationUpdateInput";
import { OrganizationWhereUniqueInput } from "../../../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOrganizationArgs {
  @TypeGraphQL.Field(_type => OrganizationWhereUniqueInput, {
    nullable: false
  })
  where!: OrganizationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrganizationCreateInput, {
    nullable: false
  })
  create!: OrganizationCreateInput;

  @TypeGraphQL.Field(_type => OrganizationUpdateInput, {
    nullable: false
  })
  update!: OrganizationUpdateInput;
}
