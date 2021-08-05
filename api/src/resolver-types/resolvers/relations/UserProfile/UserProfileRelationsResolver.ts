import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class UserProfileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).user({});
  }
}
