import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobCountAggregate } from "../outputs/JobCountAggregate";
import { JobMaxAggregate } from "../outputs/JobMaxAggregate";
import { JobMinAggregate } from "../outputs/JobMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateJob {
  @TypeGraphQL.Field(_type => JobCountAggregate, {
    nullable: true
  })
  _count!: JobCountAggregate | null;

  @TypeGraphQL.Field(_type => JobMinAggregate, {
    nullable: true
  })
  _min!: JobMinAggregate | null;

  @TypeGraphQL.Field(_type => JobMaxAggregate, {
    nullable: true
  })
  _max!: JobMaxAggregate | null;
}
