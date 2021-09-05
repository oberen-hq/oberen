import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorCountAggregate } from "../outputs/ErrorCountAggregate";
import { ErrorMaxAggregate } from "../outputs/ErrorMaxAggregate";
import { ErrorMinAggregate } from "../outputs/ErrorMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateError {
  @TypeGraphQL.Field(_type => ErrorCountAggregate, {
    nullable: true
  })
  _count!: ErrorCountAggregate | null;

  @TypeGraphQL.Field(_type => ErrorMinAggregate, {
    nullable: true
  })
  _min!: ErrorMinAggregate | null;

  @TypeGraphQL.Field(_type => ErrorMaxAggregate, {
    nullable: true
  })
  _max!: ErrorMaxAggregate | null;
}
