import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationOrderByInput } from "../../../inputs/OrganizationOrderByInput";
import { OrganizationWhereInput } from "../../../inputs/OrganizationWhereInput";
import { OrganizationWhereUniqueInput } from "../../../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOrganizationArgs {
  @TypeGraphQL.Field(_type => OrganizationWhereInput, {
    nullable: true
  })
  where?: OrganizationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrganizationOrderByInput], {
    nullable: true
  })
  orderBy?: OrganizationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => OrganizationWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrganizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
