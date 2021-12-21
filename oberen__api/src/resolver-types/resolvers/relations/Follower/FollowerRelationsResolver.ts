import * as TypeGraphQL from "type-graphql";
import { Follower } from "../../../models/Follower";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Follower)
export class FollowerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() follower: Follower, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).follower.findUnique({
      where: {
        id: follower.id,
      },
    }).user({});
  }
}
