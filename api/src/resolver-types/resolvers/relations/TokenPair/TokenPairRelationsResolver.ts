import * as TypeGraphQL from "type-graphql";
import { TokenPair } from "../../../models/TokenPair";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TokenPair)
export class TokenPairRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() tokenPair: TokenPair, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).tokenPair.findUnique({
      where: {
        id: tokenPair.id,
      },
    }).user({});
  }
}
