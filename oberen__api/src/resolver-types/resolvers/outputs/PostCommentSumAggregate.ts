import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PostCommentSumAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  likes!: bigint | null;
}
