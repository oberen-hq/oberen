import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsUpdateInput } from "../../../inputs/UserSettingsUpdateInput";
import { UserSettingsWhereUniqueInput } from "../../../inputs/UserSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserSettingsArgs {
  @TypeGraphQL.Field(_type => UserSettingsUpdateInput, {
    nullable: false
  })
  data!: UserSettingsUpdateInput;

  @TypeGraphQL.Field(_type => UserSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: UserSettingsWhereUniqueInput;
}
