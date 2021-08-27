import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAttachmentTypeFilter } from "../inputs/EnumAttachmentTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentScalarWhereInput {
  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  AND?: AttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  OR?: AttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  NOT?: AttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  attachmentUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAttachmentTypeFilter, {
    nullable: true
  })
  type?: EnumAttachmentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  postId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reportId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creatorId?: StringFilter | undefined;
}
