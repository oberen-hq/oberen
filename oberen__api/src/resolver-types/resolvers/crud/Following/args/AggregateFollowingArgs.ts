import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingOrderByInput } from "../../../inputs/FollowingOrderByInput";
import { FollowingWhereInput } from "../../../inputs/FollowingWhereInput";
import { FollowingWhereUniqueInput } from "../../../inputs/FollowingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFollowingArgs {
  @TypeGraphQL.Field(_type => FollowingWhereInput, {
    nullable: true
  })
  where?: FollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FollowingOrderByInput], {
    nullable: true
  })
  orderBy?: FollowingOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowingWhereUniqueInput, {
    nullable: true
  })
  cursor?: FollowingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
