import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowerScalarWhereInput {
  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true
  })
  AND?: FollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true
  })
  OR?: FollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true
  })
  NOT?: FollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  avatar?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  userId?: StringNullableFilter | undefined;
}
