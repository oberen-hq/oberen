import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagAvgAggregate } from "../outputs/HashtagAvgAggregate";
import { HashtagCountAggregate } from "../outputs/HashtagCountAggregate";
import { HashtagMaxAggregate } from "../outputs/HashtagMaxAggregate";
import { HashtagMinAggregate } from "../outputs/HashtagMinAggregate";
import { HashtagSumAggregate } from "../outputs/HashtagSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class HashtagGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  uses!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creatorId!: string;

  @TypeGraphQL.Field(_type => HashtagCountAggregate, {
    nullable: true
  })
  _count!: HashtagCountAggregate | null;

  @TypeGraphQL.Field(_type => HashtagAvgAggregate, {
    nullable: true
  })
  _avg!: HashtagAvgAggregate | null;

  @TypeGraphQL.Field(_type => HashtagSumAggregate, {
    nullable: true
  })
  _sum!: HashtagSumAggregate | null;

  @TypeGraphQL.Field(_type => HashtagMinAggregate, {
    nullable: true
  })
  _min!: HashtagMinAggregate | null;

  @TypeGraphQL.Field(_type => HashtagMaxAggregate, {
    nullable: true
  })
  _max!: HashtagMaxAggregate | null;
}
