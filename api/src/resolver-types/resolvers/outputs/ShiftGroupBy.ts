import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftCountAggregate } from "../outputs/ShiftCountAggregate";
import { ShiftMaxAggregate } from "../outputs/ShiftMaxAggregate";
import { ShiftMinAggregate } from "../outputs/ShiftMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ShiftGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => ShiftCountAggregate, {
    nullable: true
  })
  _count!: ShiftCountAggregate | null;

  @TypeGraphQL.Field(_type => ShiftMinAggregate, {
    nullable: true
  })
  _min!: ShiftMinAggregate | null;

  @TypeGraphQL.Field(_type => ShiftMaxAggregate, {
    nullable: true
  })
  _max!: ShiftMaxAggregate | null;
}
