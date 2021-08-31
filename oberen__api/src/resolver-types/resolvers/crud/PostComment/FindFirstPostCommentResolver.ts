import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstPostCommentArgs } from "./args/FindFirstPostCommentArgs";
import { PostComment } from "../../../models/PostComment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostComment)
export class FindFirstPostCommentResolver {
  @TypeGraphQL.Query(_returns => PostComment, {
    nullable: true
  })
  async findFirstPostComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPostCommentArgs): Promise<PostComment | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postComment.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
