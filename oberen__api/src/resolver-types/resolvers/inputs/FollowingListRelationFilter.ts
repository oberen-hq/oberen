import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingWhereInput } from "../inputs/FollowingWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingListRelationFilter {
  @TypeGraphQL.Field(_type => FollowingWhereInput, {
    nullable: true
  })
  every?: FollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => FollowingWhereInput, {
    nullable: true
  })
  some?: FollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => FollowingWhereInput, {
    nullable: true
  })
  none?: FollowingWhereInput | undefined;
}
