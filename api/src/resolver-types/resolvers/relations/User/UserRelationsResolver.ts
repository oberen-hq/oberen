import * as TypeGraphQL from "type-graphql";
import { Label } from "../../../models/Label";
import { OauthConnection } from "../../../models/OauthConnection";
import { Post } from "../../../models/Post";
import { PostComment } from "../../../models/PostComment";
import { TokenPair } from "../../../models/TokenPair";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserCreatedCommentsArgs } from "./args/UserCreatedCommentsArgs";
import { UserCreatedLabelsArgs } from "./args/UserCreatedLabelsArgs";
import { UserLikedCommentsArgs } from "./args/UserLikedCommentsArgs";
import { UserLikedPostsArgs } from "./args/UserLikedPostsArgs";
import { UserOauthConnectionsArgs } from "./args/UserOauthConnectionsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserTokensArgs } from "./args/UserTokensArgs";
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

  @TypeGraphQL.FieldResolver(_type => [PostComment], {
    nullable: false
  })
  async createdComments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedCommentsArgs): Promise<PostComment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdComments(args);
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

  @TypeGraphQL.FieldResolver(_type => [OauthConnection], {
    nullable: false
  })
  async oauthConnections(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserOauthConnectionsArgs): Promise<OauthConnection[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).oauthConnections(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TokenPair], {
    nullable: false
  })
  async tokens(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTokensArgs): Promise<TokenPair[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).tokens(args);
  }
}
