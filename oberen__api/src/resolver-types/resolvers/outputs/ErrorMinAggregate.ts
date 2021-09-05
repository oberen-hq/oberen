import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorType } from "../../enums/ErrorType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ErrorMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => ErrorType, {
    nullable: true
  })
  type!: "internal" | "authentication" | "timeout" | "unavailable" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  route!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;
}
