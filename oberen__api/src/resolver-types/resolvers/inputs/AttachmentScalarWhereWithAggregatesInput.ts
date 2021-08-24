import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumAttachmentTypeWithAggregatesFilter } from "../inputs/EnumAttachmentTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AttachmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AttachmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AttachmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AttachmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  attachmentUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAttachmentTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumAttachmentTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  postId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  reportId?: StringWithAggregatesFilter | undefined;
}
