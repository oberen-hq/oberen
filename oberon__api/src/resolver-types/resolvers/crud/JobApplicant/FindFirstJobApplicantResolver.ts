import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstJobApplicantArgs } from "./args/FindFirstJobApplicantArgs";
import { JobApplicant } from "../../../models/JobApplicant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobApplicant)
export class FindFirstJobApplicantResolver {
  @TypeGraphQL.Query(_returns => JobApplicant, {
    nullable: true
  })
  async findFirstJobApplicant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstJobApplicantArgs): Promise<JobApplicant | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).jobApplicant.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
