import * as TypeGraphQL from "type-graphql";
import { Label } from "../../../models/Label";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserProfileLabelsArgs } from "./args/UserProfileLabelsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Label], {
    nullable: false
  })
  async labels(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProfileLabelsArgs): Promise<Label[]> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).labels(args);
  }
}
