import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserSettingsArgs } from "./args/AggregateUserSettingsArgs";
import { UserSettings } from "../../../models/UserSettings";
import { AggregateUserSettings } from "../../outputs/AggregateUserSettings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserSettings)
export class AggregateUserSettingsResolver {
  @TypeGraphQL.Query(_returns => AggregateUserSettings, {
    nullable: false
  })
  async aggregateUserSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserSettingsArgs): Promise<AggregateUserSettings> {
    return getPrismaFromContext(ctx).userSettings.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
