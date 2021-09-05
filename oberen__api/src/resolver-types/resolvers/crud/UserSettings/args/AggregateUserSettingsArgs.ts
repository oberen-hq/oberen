import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserSettingsOrderByInput } from "../../../inputs/UserSettingsOrderByInput";
import { UserSettingsWhereInput } from "../../../inputs/UserSettingsWhereInput";
import { UserSettingsWhereUniqueInput } from "../../../inputs/UserSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserSettingsArgs {
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
}
