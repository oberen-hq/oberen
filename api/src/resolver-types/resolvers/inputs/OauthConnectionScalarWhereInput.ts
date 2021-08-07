import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumConnectionServiceFilter } from "../inputs/EnumConnectionServiceFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OauthConnectionScalarWhereInput {
  @TypeGraphQL.Field(_type => [OauthConnectionScalarWhereInput], {
    nullable: true
  })
  AND?: OauthConnectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OauthConnectionScalarWhereInput], {
    nullable: true
  })
  OR?: OauthConnectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OauthConnectionScalarWhereInput], {
    nullable: true
  })
  NOT?: OauthConnectionScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => EnumConnectionServiceFilter, {
    nullable: true
  })
  oauthService?: EnumConnectionServiceFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  oauthServiceUserId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isPrimary?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
