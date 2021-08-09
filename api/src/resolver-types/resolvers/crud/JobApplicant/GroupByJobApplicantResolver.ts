import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByJobApplicantArgs } from "./args/GroupByJobApplicantArgs";
import { JobApplicant } from "../../../models/JobApplicant";
import { JobApplicantGroupBy } from "../../outputs/JobApplicantGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobApplicant)
export class GroupByJobApplicantResolver {
  @TypeGraphQL.Query(_returns => [JobApplicantGroupBy], {
    nullable: false
  })
  async groupByJobApplicant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByJobApplicantArgs): Promise<JobApplicantGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).jobApplicant.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
