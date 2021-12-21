import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingWhereInput } from "../../../inputs/FollowingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFollowingArgs {
  @TypeGraphQL.Field(_type => FollowingWhereInput, {
    nullable: true
  })
  where?: FollowingWhereInput | undefined;
}
