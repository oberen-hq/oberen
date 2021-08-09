import * as TypeGraphQL from "type-graphql";
import { Attachment } from "../../../models/Attachment";
import { Comment } from "../../../models/Comment";
import { Report } from "../../../models/Report";
import { User } from "../../../models/User";
import { ReportAttachmentsArgs } from "./args/ReportAttachmentsArgs";
import { ReportCommentsArgs } from "./args/ReportCommentsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Report)
export class ReportRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() report: Report, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).report.findUnique({
      where: {
        id: report.id,
      },
    }).creator({});
  }

  @TypeGraphQL.FieldResolver(_type => [Attachment], {
    nullable: false
  })
  async attachments(@TypeGraphQL.Root() report: Report, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ReportAttachmentsArgs): Promise<Attachment[]> {
    return getPrismaFromContext(ctx).report.findUnique({
      where: {
        id: report.id,
      },
    }).attachments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() report: Report, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ReportCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).report.findUnique({
      where: {
        id: report.id,
      },
    }).comments(args);
  }
}
