import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class JobWhereInput {
  @TypeGraphQL.Field(_type => [JobWhereInput], {
    nullable: true
  })
  AND?: JobWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobWhereInput], {
    nullable: true
  })
  OR?: JobWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobWhereInput], {
    nullable: true
  })
  NOT?: JobWhereInput[] | undefined;

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
}
