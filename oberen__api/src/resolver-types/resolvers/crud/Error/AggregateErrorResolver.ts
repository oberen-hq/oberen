import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateErrorArgs } from "./args/AggregateErrorArgs";
import { Error } from "../../../models/Error";
import { AggregateError } from "../../outputs/AggregateError";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Error)
export class AggregateErrorResolver {
  @TypeGraphQL.Query(_returns => AggregateError, {
    nullable: false
  })
  async aggregateError(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateErrorArgs): Promise<AggregateError> {
    return getPrismaFromContext(ctx).error.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
