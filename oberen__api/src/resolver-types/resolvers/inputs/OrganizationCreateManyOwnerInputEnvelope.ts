import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateManyOwnerInput } from "../inputs/OrganizationCreateManyOwnerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [OrganizationCreateManyOwnerInput], {
    nullable: false
  })
  data!: OrganizationCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
