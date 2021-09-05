import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsWhereUniqueInput } from "../../../inputs/UserSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUserSettingsArgs {
  @TypeGraphQL.Field(_type => UserSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: UserSettingsWhereUniqueInput;
}
