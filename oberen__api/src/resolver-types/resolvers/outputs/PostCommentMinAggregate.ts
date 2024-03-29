import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PostCommentMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  body!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  creatorId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  edited!: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  likes!: bigint | null;
}
