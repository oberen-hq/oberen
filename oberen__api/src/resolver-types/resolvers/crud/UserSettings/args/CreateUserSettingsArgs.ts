import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsCreateInput } from "../../../inputs/UserSettingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserSettingsArgs {
  @TypeGraphQL.Field(_type => UserSettingsCreateInput, {
    nullable: false
  })
  data!: UserSettingsCreateInput;
}
