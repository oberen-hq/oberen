import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumAttachmentTypeFilter } from "../inputs/EnumAttachmentTypeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { ReportRelationFilter } from "../inputs/ReportRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentWhereInput {
  @TypeGraphQL.Field(_type => [AttachmentWhereInput], {
    nullable: true
  })
  AND?: AttachmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereInput], {
    nullable: true
  })
  OR?: AttachmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereInput], {
    nullable: true
  })
  NOT?: AttachmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  attachmentUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAttachmentTypeFilter, {
    nullable: true
  })
  type?: EnumAttachmentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ReportRelationFilter, {
    nullable: true
  })
  report?: ReportRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  reportId?: StringFilter | undefined;
}
