import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAttachmentTypeFilter } from "../inputs/NestedEnumAttachmentTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumAttachmentTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: true
  })
  equals?: "image" | "video" | "organization" | "post" | "other" | undefined;

  @TypeGraphQL.Field(_type => [AttachmentType], {
    nullable: true
  })
  in?: Array<"image" | "video" | "organization" | "post" | "other"> | undefined;

  @TypeGraphQL.Field(_type => [AttachmentType], {
    nullable: true
  })
  notIn?: Array<"image" | "video" | "organization" | "post" | "other"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAttachmentTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumAttachmentTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAttachmentTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumAttachmentTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAttachmentTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumAttachmentTypeFilter | undefined;
}
