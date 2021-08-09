import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumAttachmentTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumAttachmentTypeFilter, {
    nullable: true
  })
  not?: NestedEnumAttachmentTypeFilter | undefined;
}
