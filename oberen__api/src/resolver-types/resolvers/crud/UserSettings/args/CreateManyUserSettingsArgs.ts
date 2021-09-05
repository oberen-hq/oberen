import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsCreateManyInput } from "../../../inputs/UserSettingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserSettingsArgs {
  @TypeGraphQL.Field(_type => [UserSettingsCreateManyInput], {
    nullable: false
  })
  data!: UserSettingsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
