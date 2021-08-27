import * as TypeGraphQL from "type-graphql";
import { Attachment } from "../../../models/Attachment";
import { Comment } from "../../../models/Comment";
import { Label } from "../../../models/Label";
import { OauthConnection } from "../../../models/OauthConnection";
import { Post } from "../../../models/Post";
import { Report } from "../../../models/Report";
import { TokenPair } from "../../../models/TokenPair";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserCreatedAttachmentsArgs } from "./args/UserCreatedAttachmentsArgs";
import { UserCreatedCommentsArgs } from "./args/UserCreatedCommentsArgs";
import { UserCreatedLabelsArgs } from "./args/UserCreatedLabelsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikedCommentsArgs } from "./args/UserLikedCommentsArgs";
import { UserLikedPostsArgs } from "./args/UserLikedPostsArgs";
import { UserOauthConnectionsArgs } from "./args/UserOauthConnectionsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserReportsArgs } from "./args/UserReportsArgs";
import { UserTokensArgs } from "./args/UserTokensArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: false
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile> {
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

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async createdComments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedCommentsArgs): Promise<Comment[]> {
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

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async likedComments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikedCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).likedComments(args);
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

  @TypeGraphQL.FieldResolver(_type => [Attachment], {
    nullable: false
  })
  async createdAttachments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedAttachmentsArgs): Promise<Attachment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdAttachments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Report], {
    nullable: false
  })
  async reports(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReportsArgs): Promise<Report[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).reports(args);
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
