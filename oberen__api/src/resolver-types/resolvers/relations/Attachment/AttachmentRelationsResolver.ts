import * as TypeGraphQL from "type-graphql";
import { Attachment } from "../../../models/Attachment";
import { Post } from "../../../models/Post";
import { Report } from "../../../models/Report";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attachment)
export class AttachmentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: true
  })
  async post(@TypeGraphQL.Root() attachment: Attachment, @TypeGraphQL.Ctx() ctx: any): Promise<Post | null> {
    return getPrismaFromContext(ctx).attachment.findUnique({
      where: {
        id: attachment.id,
      },
    }).post({});
  }

  @TypeGraphQL.FieldResolver(_type => Report, {
    nullable: true
  })
  async report(@TypeGraphQL.Root() attachment: Attachment, @TypeGraphQL.Ctx() ctx: any): Promise<Report | null> {
    return getPrismaFromContext(ctx).attachment.findUnique({
      where: {
        id: attachment.id,
      },
    }).report({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() attachment: Attachment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).attachment.findUnique({
      where: {
        id: attachment.id,
      },
    }).creator({});
  }
}
