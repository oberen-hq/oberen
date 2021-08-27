import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertJobApplicantArgs } from "./args/UpsertJobApplicantArgs";
import { JobApplicant } from "../../../models/JobApplicant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobApplicant)
export class UpsertJobApplicantResolver {
  @TypeGraphQL.Mutation(_returns => JobApplicant, {
    nullable: false
  })
  async upsertJobApplicant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertJobApplicantArgs): Promise<JobApplicant> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).jobApplicant.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
