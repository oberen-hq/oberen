import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  avatarUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  bio?: StringWithAggregatesFilter | undefined;
}
