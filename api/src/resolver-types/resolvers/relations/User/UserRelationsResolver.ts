import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { PostComment } from "../../../models/PostComment";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserLikedCommentsArgs } from "./args/UserLikedCommentsArgs";
import { UserLikedPostsArgs } from "./args/UserLikedPostsArgs";
import { UserPostCommentArgs } from "./args/UserPostCommentArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async likedPosts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikedPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).likedPosts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PostComment], {
    nullable: false
  })
  async likedComments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikedCommentsArgs): Promise<PostComment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).likedComments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PostComment], {
    nullable: false
  })
  async PostComment(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostCommentArgs): Promise<PostComment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).PostComment(args);
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: true
  })
  async Post(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Post | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Post({});
  }
}
