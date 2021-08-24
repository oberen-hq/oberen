import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateJobArgs } from "./args/AggregateJobArgs";
import { Job } from "../../../models/Job";
import { AggregateJob } from "../../outputs/AggregateJob";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Job)
export class AggregateJobResolver {
  @TypeGraphQL.Query(_returns => AggregateJob, {
    nullable: false
  })
  async aggregateJob(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJobArgs): Promise<AggregateJob> {
    return getPrismaFromContext(ctx).job.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
