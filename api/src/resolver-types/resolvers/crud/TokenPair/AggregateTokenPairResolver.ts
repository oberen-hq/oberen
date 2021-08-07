import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTokenPairArgs } from "./args/AggregateTokenPairArgs";
import { TokenPair } from "../../../models/TokenPair";
import { AggregateTokenPair } from "../../outputs/AggregateTokenPair";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TokenPair)
export class AggregateTokenPairResolver {
  @TypeGraphQL.Query(_returns => AggregateTokenPair, {
    nullable: false
  })
  async aggregateTokenPair(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTokenPairArgs): Promise<AggregateTokenPair> {
    return getPrismaFromContext(ctx).tokenPair.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
