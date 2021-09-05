import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsUpdateManyMutationInput } from "../../../inputs/UserSettingsUpdateManyMutationInput";
import { UserSettingsWhereInput } from "../../../inputs/UserSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserSettingsArgs {
  @TypeGraphQL.Field(_type => UserSettingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserSettingsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserSettingsWhereInput, {
    nullable: true
  })
  where?: UserSettingsWhereInput | undefined;
}
