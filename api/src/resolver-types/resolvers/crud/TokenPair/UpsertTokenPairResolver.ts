import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTokenPairArgs } from "./args/UpsertTokenPairArgs";
import { TokenPair } from "../../../models/TokenPair";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TokenPair)
export class UpsertTokenPairResolver {
  @TypeGraphQL.Mutation(_returns => TokenPair, {
    nullable: false
  })
  async upsertTokenPair(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTokenPairArgs): Promise<TokenPair> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tokenPair.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
