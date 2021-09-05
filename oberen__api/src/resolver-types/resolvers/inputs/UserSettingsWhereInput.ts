import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserProfileRelationFilter } from "../inputs/UserProfileRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserSettingsWhereInput {
  @TypeGraphQL.Field(_type => [UserSettingsWhereInput], {
    nullable: true
  })
  AND?: UserSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSettingsWhereInput], {
    nullable: true
  })
  OR?: UserSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSettingsWhereInput], {
    nullable: true
  })
  NOT?: UserSettingsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserProfileRelationFilter, {
    nullable: true
  })
  userProfile?: UserProfileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userProfileId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  location?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  website?: StringNullableFilter | undefined;
}
