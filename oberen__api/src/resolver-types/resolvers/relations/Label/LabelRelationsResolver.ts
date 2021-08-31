import * as TypeGraphQL from "type-graphql";
import { Label } from "../../../models/Label";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { LabelPostsArgs } from "./args/LabelPostsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() label: Label, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LabelPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).label.findUnique({
      where: {
        id: label.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: false
  })
  async profile(@TypeGraphQL.Root() label: Label, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile> {
    return getPrismaFromContext(ctx).label.findUnique({
      where: {
        id: label.id,
      },
    }).profile({});
  }
}
