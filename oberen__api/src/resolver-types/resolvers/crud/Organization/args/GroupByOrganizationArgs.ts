import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationOrderByInput } from "../../../inputs/OrganizationOrderByInput";
import { OrganizationScalarWhereWithAggregatesInput } from "../../../inputs/OrganizationScalarWhereWithAggregatesInput";
import { OrganizationWhereInput } from "../../../inputs/OrganizationWhereInput";
import { OrganizationScalarFieldEnum } from "../../../../enums/OrganizationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrganizationArgs {
  @TypeGraphQL.Field(_type => OrganizationWhereInput, {
    nullable: true
  })
  where?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrganizationOrderByInput], {
    nullable: true
  })
  orderBy?: OrganizationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationScalarFieldEnum], {
    nullable: false
  })
  by!: "id"[];

  @TypeGraphQL.Field(_type => OrganizationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrganizationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
