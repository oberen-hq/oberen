import * as TypeGraphQL from "type-graphql";
import { Hashtag } from "../../../models/Hashtag";
import { Label } from "../../../models/Label";
import { Post } from "../../../models/Post";
import { PostComment } from "../../../models/PostComment";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserCreatedHashtagsArgs } from "./args/UserCreatedHashtagsArgs";
import { UserCreatedLabelsArgs } from "./args/UserCreatedLabelsArgs";
import { UserCreatedPostCommentsArgs } from "./args/UserCreatedPostCommentsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikedCommentsArgs } from "./args/UserLikedCommentsArgs";
import { UserLikedPostsArgs } from "./args/UserLikedPostsArgs";
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
  async createdPostComments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedPostCommentsArgs): Promise<PostComment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdPostComments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async following(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowingArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).following(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async followers(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).followers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Label], {
    nullable: false
  })
  async createdLabels(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedLabelsArgs): Promise<Label[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdLabels(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Hashtag], {
    nullable: false
  })
  async createdHashtags(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedHashtagsArgs): Promise<Hashtag[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdHashtags(args);
  }
}
