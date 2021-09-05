import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumErrorTypeFilter } from "../inputs/EnumErrorTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorWhereInput {
  @TypeGraphQL.Field(_type => [ErrorWhereInput], {
    nullable: true
  })
  AND?: ErrorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorWhereInput], {
    nullable: true
  })
  OR?: ErrorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorWhereInput], {
    nullable: true
  })
  NOT?: ErrorWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  route?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
