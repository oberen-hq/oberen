import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingCreateInput } from "../../../inputs/FollowingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFollowingArgs {
  @TypeGraphQL.Field(_type => FollowingCreateInput, {
    nullable: false
  })
  data!: FollowingCreateInput;
}
