import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCountAggregate } from "../outputs/OrganizationCountAggregate";
import { OrganizationMaxAggregate } from "../outputs/OrganizationMaxAggregate";
import { OrganizationMinAggregate } from "../outputs/OrganizationMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class OrganizationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => OrganizationCountAggregate, {
    nullable: true
  })
  _count!: OrganizationCountAggregate | null;

  @TypeGraphQL.Field(_type => OrganizationMinAggregate, {
    nullable: true
  })
  _min!: OrganizationMinAggregate | null;

  @TypeGraphQL.Field(_type => OrganizationMaxAggregate, {
    nullable: true
  })
  _max!: OrganizationMaxAggregate | null;
}
