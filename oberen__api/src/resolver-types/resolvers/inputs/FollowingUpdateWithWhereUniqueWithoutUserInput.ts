import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingUpdateWithoutUserInput } from "../inputs/FollowingUpdateWithoutUserInput";
import { FollowingWhereUniqueInput } from "../inputs/FollowingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FollowingWhereUniqueInput, {
    nullable: false
  })
  where!: FollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowingUpdateWithoutUserInput, {
    nullable: false
  })
  data!: FollowingUpdateWithoutUserInput;
}
