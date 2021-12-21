import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowerOrderByInput } from "../../../inputs/FollowerOrderByInput";
import { FollowerWhereInput } from "../../../inputs/FollowerWhereInput";
import { FollowerWhereUniqueInput } from "../../../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFollowerArgs {
  @TypeGraphQL.Field(_type => FollowerWhereInput, {
    nullable: true
  })
  where?: FollowerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FollowerOrderByInput], {
    nullable: true
  })
  orderBy?: FollowerOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: true
  })
  cursor?: FollowerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
