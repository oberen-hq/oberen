import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { PostComment } from "../../../models/PostComment";
import { User } from "../../../models/User";
import { PostCommentLikersArgs } from "./args/PostCommentLikersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostComment)
export class PostCommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() postComment: PostComment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).postComment.findUnique({
      where: {
        id: postComment.id,
      },
    }).creator({});
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async post(@TypeGraphQL.Root() postComment: PostComment, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return getPrismaFromContext(ctx).postComment.findUnique({
      where: {
        id: postComment.id,
      },
    }).post({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async likers(@TypeGraphQL.Root() postComment: PostComment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostCommentLikersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).postComment.findUnique({
      where: {
        id: postComment.id,
      },
    }).likers(args);
  }
}
