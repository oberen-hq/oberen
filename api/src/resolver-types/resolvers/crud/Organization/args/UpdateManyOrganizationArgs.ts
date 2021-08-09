import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationUpdateManyMutationInput } from "../../../inputs/OrganizationUpdateManyMutationInput";
import { OrganizationWhereInput } from "../../../inputs/OrganizationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrganizationArgs {
  @TypeGraphQL.Field(_type => OrganizationUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrganizationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OrganizationWhereInput, {
    nullable: true
  })
  where?: OrganizationWhereInput | undefined;
}
