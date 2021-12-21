import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingCreateWithoutUserInput } from "../inputs/FollowingCreateWithoutUserInput";
import { FollowingUpdateWithoutUserInput } from "../inputs/FollowingUpdateWithoutUserInput";
import { FollowingWhereUniqueInput } from "../inputs/FollowingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FollowingWhereUniqueInput, {
    nullable: false
  })
  where!: FollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowingUpdateWithoutUserInput, {
    nullable: false
  })
  update!: FollowingUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => FollowingCreateWithoutUserInput, {
    nullable: false
  })
  create!: FollowingCreateWithoutUserInput;
}
