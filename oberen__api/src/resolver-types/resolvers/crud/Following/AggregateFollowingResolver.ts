import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFollowingArgs } from "./args/AggregateFollowingArgs";
import { Following } from "../../../models/Following";
import { AggregateFollowing } from "../../outputs/AggregateFollowing";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Following)
export class AggregateFollowingResolver {
  @TypeGraphQL.Query(_returns => AggregateFollowing, {
    nullable: false
  })
  async aggregateFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFollowingArgs): Promise<AggregateFollowing> {
    return getPrismaFromContext(ctx).following.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
