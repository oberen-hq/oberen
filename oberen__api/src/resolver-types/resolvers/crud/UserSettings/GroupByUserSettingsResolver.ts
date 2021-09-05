import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUserSettingsArgs } from "./args/GroupByUserSettingsArgs";
import { UserSettings } from "../../../models/UserSettings";
import { UserSettingsGroupBy } from "../../outputs/UserSettingsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserSettings)
export class GroupByUserSettingsResolver {
  @TypeGraphQL.Query(_returns => [UserSettingsGroupBy], {
    nullable: false
  })
  async groupByUserSettings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserSettingsArgs): Promise<UserSettingsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userSettings.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
