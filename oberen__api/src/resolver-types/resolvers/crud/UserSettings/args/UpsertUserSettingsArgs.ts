import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsCreateInput } from "../../../inputs/UserSettingsCreateInput";
import { UserSettingsUpdateInput } from "../../../inputs/UserSettingsUpdateInput";
import { UserSettingsWhereUniqueInput } from "../../../inputs/UserSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserSettingsArgs {
  @TypeGraphQL.Field(_type => UserSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: UserSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserSettingsCreateInput, {
    nullable: false
  })
  create!: UserSettingsCreateInput;

  @TypeGraphQL.Field(_type => UserSettingsUpdateInput, {
    nullable: false
  })
  update!: UserSettingsUpdateInput;
}
