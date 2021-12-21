import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingCreateInput } from "../../../inputs/FollowingCreateInput";
import { FollowingUpdateInput } from "../../../inputs/FollowingUpdateInput";
import { FollowingWhereUniqueInput } from "../../../inputs/FollowingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFollowingArgs {
  @TypeGraphQL.Field(_type => FollowingWhereUniqueInput, {
    nullable: false
  })
  where!: FollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowingCreateInput, {
    nullable: false
  })
  create!: FollowingCreateInput;

  @TypeGraphQL.Field(_type => FollowingUpdateInput, {
    nullable: false
  })
  update!: FollowingUpdateInput;
}
