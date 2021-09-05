import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsWhereInput } from "../../../inputs/UserSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserSettingsArgs {
  @TypeGraphQL.Field(_type => UserSettingsWhereInput, {
    nullable: true
  })
  where?: UserSettingsWhereInput | undefined;
}
