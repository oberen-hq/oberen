import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowerUpdateInput } from "../../../inputs/FollowerUpdateInput";
import { FollowerWhereUniqueInput } from "../../../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFollowerArgs {
  @TypeGraphQL.Field(_type => FollowerUpdateInput, {
    nullable: false
  })
  data!: FollowerUpdateInput;

  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: false
  })
  where!: FollowerWhereUniqueInput;
}
