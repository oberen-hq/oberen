import * as TypeGraphQL from "type-graphql";
import { Error } from "../../../models/Error";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Error)
export class ErrorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() error: Error, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).error.findUnique({
      where: {
        id: error.id,
      },
    }).user({});
  }
}
