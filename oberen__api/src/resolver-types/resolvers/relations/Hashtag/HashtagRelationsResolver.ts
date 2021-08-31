import * as TypeGraphQL from "type-graphql";
import { Hashtag } from "../../../models/Hashtag";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { HashtagPostsArgs } from "./args/HashtagPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hashtag)
export class HashtagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() hashtag: Hashtag, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).hashtag.findUnique({
      where: {
        id: hashtag.id,
      },
    }).creator({});
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() hashtag: Hashtag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: HashtagPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).hashtag.findUnique({
      where: {
        id: hashtag.id,
      },
    }).posts(args);
  }
}
