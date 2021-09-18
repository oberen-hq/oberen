import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagWhereInput {
  @TypeGraphQL.Field(_type => [HashtagWhereInput], {
    nullable: true
  })
  AND?: HashtagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereInput], {
    nullable: true
  })
  OR?: HashtagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereInput], {
    nullable: true
  })
  NOT?: HashtagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  uses?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  creator?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creatorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;
}
