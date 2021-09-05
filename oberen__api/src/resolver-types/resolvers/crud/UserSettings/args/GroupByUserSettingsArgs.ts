import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsOrderByInput } from "../../../inputs/UserSettingsOrderByInput";
import { UserSettingsScalarWhereWithAggregatesInput } from "../../../inputs/UserSettingsScalarWhereWithAggregatesInput";
import { UserSettingsWhereInput } from "../../../inputs/UserSettingsWhereInput";
import { UserSettingsScalarFieldEnum } from "../../../../enums/UserSettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserSettingsArgs {
  @TypeGraphQL.Field(_type => UserSettingsWhereInput, {
    nullable: true
  })
  where?: UserSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserSettingsOrderByInput], {
    nullable: true
  })
  orderBy?: UserSettingsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSettingsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "userProfileId" | "location" | "website">;

  @TypeGraphQL.Field(_type => UserSettingsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserSettingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
