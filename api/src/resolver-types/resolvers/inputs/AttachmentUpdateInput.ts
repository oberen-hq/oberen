import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumAttachmentTypeFieldUpdateOperationsInput } from "../inputs/EnumAttachmentTypeFieldUpdateOperationsInput";
import { PostUpdateOneWithoutAttachmentsInput } from "../inputs/PostUpdateOneWithoutAttachmentsInput";
import { ReportUpdateOneRequiredWithoutAttachmentsInput } from "../inputs/ReportUpdateOneRequiredWithoutAttachmentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  attachmentUrl?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumAttachmentTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumAttachmentTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneWithoutAttachmentsInput, {
    nullable: true
  })
  post?: PostUpdateOneWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpdateOneRequiredWithoutAttachmentsInput, {
    nullable: true
  })
  report?: ReportUpdateOneRequiredWithoutAttachmentsInput | undefined;
}