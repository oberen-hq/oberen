import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPostCommentArgs } from "./args/GroupByPostCommentArgs";
import { PostComment } from "../../../models/PostComment";
import { PostCommentGroupBy } from "../../outputs/PostCommentGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostComment)
export class GroupByPostCommentResolver {
  @TypeGraphQL.Query(_returns => [PostCommentGroupBy], {
    nullable: false
  })
  async groupByPostComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPostCommentArgs): Promise<PostCommentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postComment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
