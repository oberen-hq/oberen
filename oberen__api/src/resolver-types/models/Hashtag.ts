import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Hashtag {
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

  creator?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creatorId!: string;

  posts?: Post[];
}
