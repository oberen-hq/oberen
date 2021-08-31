import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePostCommentArgs } from "./args/AggregatePostCommentArgs";
import { PostComment } from "../../../models/PostComment";
import { AggregatePostComment } from "../../outputs/AggregatePostComment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostComment)
export class AggregatePostCommentResolver {
  @TypeGraphQL.Query(_returns => AggregatePostComment, {
    nullable: false
  })
  async aggregatePostComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostCommentArgs): Promise<AggregatePostComment> {
    return getPrismaFromContext(ctx).postComment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
