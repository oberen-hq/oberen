import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSettingsCountAggregate } from "../outputs/UserSettingsCountAggregate";
import { UserSettingsMaxAggregate } from "../outputs/UserSettingsMaxAggregate";
import { UserSettingsMinAggregate } from "../outputs/UserSettingsMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateUserSettings {
  @TypeGraphQL.Field(_type => UserSettingsCountAggregate, {
    nullable: true
  })
  _count!: UserSettingsCountAggregate | null;

  @TypeGraphQL.Field(_type => UserSettingsMinAggregate, {
    nullable: true
  })
  _min!: UserSettingsMinAggregate | null;

  @TypeGraphQL.Field(_type => UserSettingsMaxAggregate, {
    nullable: true
  })
  _max!: UserSettingsMaxAggregate | null;
}
