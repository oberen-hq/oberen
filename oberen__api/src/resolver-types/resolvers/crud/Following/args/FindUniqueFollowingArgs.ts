import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingWhereUniqueInput } from "../../../inputs/FollowingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFollowingArgs {
  @TypeGraphQL.Field(_type => FollowingWhereUniqueInput, {
    nullable: false
  })
  where!: FollowingWhereUniqueInput;
}
