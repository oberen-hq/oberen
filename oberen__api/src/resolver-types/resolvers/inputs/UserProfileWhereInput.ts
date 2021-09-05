import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LabelListRelationFilter } from "../inputs/LabelListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { UserSettingsRelationFilter } from "../inputs/UserSettingsRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileWhereInput {
  @TypeGraphQL.Field(_type => [UserProfileWhereInput], {
    nullable: true
  })
  AND?: UserProfileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereInput], {
    nullable: true
  })
  OR?: UserProfileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereInput], {
    nullable: true
  })
  NOT?: UserProfileWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserSettingsRelationFilter, {
    nullable: true
  })
  settings?: UserSettingsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  avatarURL?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bio?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => LabelListRelationFilter, {
    nullable: true
  })
  labels?: LabelListRelationFilter | undefined;
}
