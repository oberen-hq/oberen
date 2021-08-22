import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLabelArgs } from "./args/AggregateLabelArgs";
import { Label } from "../../../models/Label";
import { AggregateLabel } from "../../outputs/AggregateLabel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Label)
export class AggregateLabelResolver {
  @TypeGraphQL.Query(_returns => AggregateLabel, {
    nullable: false
  })
  async aggregateLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLabelArgs): Promise<AggregateLabel> {
    return getPrismaFromContext(ctx).label.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
