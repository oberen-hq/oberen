import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAttachmentTypeFilter } from "../inputs/EnumAttachmentTypeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

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
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAttachmentTypeFilter, {
    nullable: true
  })
  type?: EnumAttachmentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  postId?: StringNullableFilter | undefined;
}
