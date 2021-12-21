import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingCreateManyInput } from "../../../inputs/FollowingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFollowingArgs {
  @TypeGraphQL.Field(_type => [FollowingCreateManyInput], {
    nullable: false
  })
  data!: FollowingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
