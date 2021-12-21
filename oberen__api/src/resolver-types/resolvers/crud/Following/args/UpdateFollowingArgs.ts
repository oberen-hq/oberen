import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingUpdateInput } from "../../../inputs/FollowingUpdateInput";
import { FollowingWhereUniqueInput } from "../../../inputs/FollowingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFollowingArgs {
  @TypeGraphQL.Field(_type => FollowingUpdateInput, {
    nullable: false
  })
  data!: FollowingUpdateInput;

  @TypeGraphQL.Field(_type => FollowingWhereUniqueInput, {
    nullable: false
  })
  where!: FollowingWhereUniqueInput;
}
