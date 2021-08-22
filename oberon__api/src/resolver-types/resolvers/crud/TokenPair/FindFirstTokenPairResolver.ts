import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstTokenPairArgs } from "./args/FindFirstTokenPairArgs";
import { TokenPair } from "../../../models/TokenPair";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TokenPair)
export class FindFirstTokenPairResolver {
  @TypeGraphQL.Query(_returns => TokenPair, {
    nullable: true
  })
  async findFirstTokenPair(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTokenPairArgs): Promise<TokenPair | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tokenPair.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
