import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAttachmentArgs } from "./args/AggregateAttachmentArgs";
import { Attachment } from "../../../models/Attachment";
import { AggregateAttachment } from "../../outputs/AggregateAttachment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attachment)
export class AggregateAttachmentResolver {
  @TypeGraphQL.Query(_returns => AggregateAttachment, {
    nullable: false
  })
  async aggregateAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttachmentArgs): Promise<AggregateAttachment> {
    return getPrismaFromContext(ctx).attachment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
