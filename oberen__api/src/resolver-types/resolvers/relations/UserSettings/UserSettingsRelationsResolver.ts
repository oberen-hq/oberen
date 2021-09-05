import * as TypeGraphQL from "type-graphql";
import { UserProfile } from "../../../models/UserProfile";
import { UserSettings } from "../../../models/UserSettings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserSettings)
export class UserSettingsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: false
  })
  async userProfile(@TypeGraphQL.Root() userSettings: UserSettings, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile> {
    return getPrismaFromContext(ctx).userSettings.findUnique({
      where: {
        id: userSettings.id,
      },
    }).userProfile({});
  }
}
