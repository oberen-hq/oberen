import * as TypeGraphQL from "type-graphql";
import { Attachment } from "../../../models/Attachment";
import { Post } from "../../../models/Post";
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
}
