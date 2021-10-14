import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumErrorTypeFilter } from "../inputs/EnumErrorTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorScalarWhereInput {
  @TypeGraphQL.Field(_type => [ErrorScalarWhereInput], {
    nullable: true
  })
  AND?: ErrorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorScalarWhereInput], {
    nullable: true
  })
  OR?: ErrorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorScalarWhereInput], {
    nullable: true
  })
  NOT?: ErrorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumErrorTypeFilter, {
    nullable: true
  })
  type?: EnumErrorTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  route?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
