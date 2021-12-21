import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FollowingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FollowingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FollowingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FollowingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  avatar?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringNullableWithAggregatesFilter | undefined;
}
