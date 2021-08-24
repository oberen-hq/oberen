import * as TypeGraphQL from "type-graphql";
import { Label } from "../../../models/Label";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Label)
export class LabelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() label: Label, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).label.findUnique({
      where: {
        id: label.id,
      },
    }).creator({});
  }

  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() label: Label, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).label.findUnique({
      where: {
        id: label.id,
      },
    }).profile({});
  }
}
