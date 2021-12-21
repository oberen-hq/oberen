import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingOrderByInput } from "../../../inputs/FollowingOrderByInput";
import { FollowingScalarWhereWithAggregatesInput } from "../../../inputs/FollowingScalarWhereWithAggregatesInput";
import { FollowingWhereInput } from "../../../inputs/FollowingWhereInput";
import { FollowingScalarFieldEnum } from "../../../../enums/FollowingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFollowingArgs {
  @TypeGraphQL.Field(_type => FollowingWhereInput, {
    nullable: true
  })
  where?: FollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FollowingOrderByInput], {
    nullable: true
  })
  orderBy?: FollowingOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "avatar" | "userId">;

  @TypeGraphQL.Field(_type => FollowingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FollowingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
