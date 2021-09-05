import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganizationCreateManyInput } from "../../../inputs/OrganizationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrganizationArgs {
  @TypeGraphQL.Field(_type => [OrganizationCreateManyInput], {
    nullable: false
  })
  data!: OrganizationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
