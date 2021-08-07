import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyTokenPairArgs } from "./args/FindManyTokenPairArgs";
import { TokenPair } from "../../../models/TokenPair";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TokenPair)
export class FindManyTokenPairResolver {
  @TypeGraphQL.Query(_returns => [TokenPair], {
    nullable: false
  })
  async tokenPairs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTokenPairArgs): Promise<TokenPair[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tokenPair.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
