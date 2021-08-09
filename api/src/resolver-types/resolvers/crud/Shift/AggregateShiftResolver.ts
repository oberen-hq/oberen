import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShiftArgs } from "./args/AggregateShiftArgs";
import { Shift } from "../../../models/Shift";
import { AggregateShift } from "../../outputs/AggregateShift";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shift)
export class AggregateShiftResolver {
  @TypeGraphQL.Query(_returns => AggregateShift, {
    nullable: false
  })
  async aggregateShift(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShiftArgs): Promise<AggregateShift> {
    return getPrismaFromContext(ctx).shift.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
