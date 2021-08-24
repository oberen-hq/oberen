import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateJobApplicantArgs } from "./args/UpdateJobApplicantArgs";
import { JobApplicant } from "../../../models/JobApplicant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobApplicant)
export class UpdateJobApplicantResolver {
  @TypeGraphQL.Mutation(_returns => JobApplicant, {
    nullable: true
  })
  async updateJobApplicant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateJobApplicantArgs): Promise<JobApplicant | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).jobApplicant.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
