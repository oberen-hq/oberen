import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowerWhereUniqueInput } from "../../../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteFollowerArgs {
  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: false
  })
  where!: FollowerWhereUniqueInput;
}
