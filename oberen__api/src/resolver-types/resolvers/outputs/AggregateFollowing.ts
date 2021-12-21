import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingCountAggregate } from "../outputs/FollowingCountAggregate";
import { FollowingMaxAggregate } from "../outputs/FollowingMaxAggregate";
import { FollowingMinAggregate } from "../outputs/FollowingMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateFollowing {
  @TypeGraphQL.Field(_type => FollowingCountAggregate, {
    nullable: true
  })
  _count!: FollowingCountAggregate | null;

  @TypeGraphQL.Field(_type => FollowingMinAggregate, {
    nullable: true
  })
  _min!: FollowingMinAggregate | null;

  @TypeGraphQL.Field(_type => FollowingMaxAggregate, {
    nullable: true
  })
  _max!: FollowingMaxAggregate | null;
}
