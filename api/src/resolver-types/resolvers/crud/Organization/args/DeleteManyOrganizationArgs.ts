import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationWhereInput } from "../../../inputs/OrganizationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrganizationArgs {
  @TypeGraphQL.Field(_type => OrganizationWhereInput, {
    nullable: true
  })
  where?: OrganizationWhereInput | undefined;
}
