import * as TypeGraphQL from "type-graphql";
import { Organization } from "../../../models/Organization";
import { User } from "../../../models/User";
import { OrganizationEmployeesArgs } from "./args/OrganizationEmployeesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Organization)
export class OrganizationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() organization: Organization, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).organization.findUnique({
      where: {
        id: organization.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async employees(@TypeGraphQL.Root() organization: Organization, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrganizationEmployeesArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).organization.findUnique({
      where: {
        id: organization.id,
      },
    }).employees(args);
  }
}
