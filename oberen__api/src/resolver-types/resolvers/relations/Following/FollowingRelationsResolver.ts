import * as TypeGraphQL from "type-graphql";
import { Following } from "../../../models/Following";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Following)
export class FollowingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() following: Following, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).following.findUnique({
      where: {
        id: following.id,
      },
    }).user({});
  }
}
