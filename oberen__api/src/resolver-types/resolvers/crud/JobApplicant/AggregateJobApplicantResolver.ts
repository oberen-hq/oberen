import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateJobApplicantArgs } from "./args/AggregateJobApplicantArgs";
import { JobApplicant } from "../../../models/JobApplicant";
import { AggregateJobApplicant } from "../../outputs/AggregateJobApplicant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobApplicant)
export class AggregateJobApplicantResolver {
  @TypeGraphQL.Query(_returns => AggregateJobApplicant, {
    nullable: false
  })
  async aggregateJobApplicant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJobApplicantArgs): Promise<AggregateJobApplicant> {
    return getPrismaFromContext(ctx).jobApplicant.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
