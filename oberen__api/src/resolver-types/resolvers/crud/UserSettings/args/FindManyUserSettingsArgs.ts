import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsOrderByInput } from "../../../inputs/UserSettingsOrderByInput";
import { UserSettingsWhereInput } from "../../../inputs/UserSettingsWhereInput";
import { UserSettingsWhereUniqueInput } from "../../../inputs/UserSettingsWhereUniqueInput";
import { UserSettingsScalarFieldEnum } from "../../../../enums/UserSettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUserSettingsArgs {
  @TypeGraphQL.Field(_type => UserSettingsWhereInput, {
    nullable: true
  })
  where?: UserSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserSettingsOrderByInput], {
    nullable: true
  })
  orderBy?: UserSettingsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => UserSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserSettingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "userProfileId" | "location" | "website"> | undefined;
}
