import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorCountAggregate } from "../outputs/ErrorCountAggregate";
import { ErrorMaxAggregate } from "../outputs/ErrorMaxAggregate";
import { ErrorMinAggregate } from "../outputs/ErrorMinAggregate";
import { ErrorType } from "../../enums/ErrorType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ErrorGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => ErrorType, {
    nullable: false
  })
  type!: "internal" | "authentication" | "timeout" | "unavailable";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  route!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
