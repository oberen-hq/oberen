import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingScalarWhereInput {
  @TypeGraphQL.Field(_type => [FollowingScalarWhereInput], {
    nullable: true
  })
  AND?: FollowingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarWhereInput], {
    nullable: true
  })
  OR?: FollowingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarWhereInput], {
    nullable: true
  })
  NOT?: FollowingScalarWhereInput[] | undefined;

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
