import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingUpdateManyMutationInput } from "../../../inputs/FollowingUpdateManyMutationInput";
import { FollowingWhereInput } from "../../../inputs/FollowingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFollowingArgs {
  @TypeGraphQL.Field(_type => FollowingUpdateManyMutationInput, {
    nullable: false
  })
  data!: FollowingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FollowingWhereInput, {
    nullable: true
  })
  where?: FollowingWhereInput | undefined;
}
