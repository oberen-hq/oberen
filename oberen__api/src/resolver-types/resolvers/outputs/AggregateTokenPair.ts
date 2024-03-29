import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenPairCountAggregate } from "../outputs/TokenPairCountAggregate";
import { TokenPairMaxAggregate } from "../outputs/TokenPairMaxAggregate";
import { TokenPairMinAggregate } from "../outputs/TokenPairMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTokenPair {
  @TypeGraphQL.Field(_type => TokenPairCountAggregate, {
    nullable: true
  })
  _count!: TokenPairCountAggregate | null;

  @TypeGraphQL.Field(_type => TokenPairMinAggregate, {
    nullable: true
  })
  _min!: TokenPairMinAggregate | null;

  @TypeGraphQL.Field(_type => TokenPairMaxAggregate, {
    nullable: true
  })
  _max!: TokenPairMaxAggregate | null;
}
