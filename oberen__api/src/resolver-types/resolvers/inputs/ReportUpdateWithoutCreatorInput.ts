import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentUpdateManyWithoutReportInput } from "../inputs/AttachmentUpdateManyWithoutReportInput";
import { CommentUpdateManyWithoutReportInput } from "../inputs/CommentUpdateManyWithoutReportInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBugReportSeverityFieldUpdateOperationsInput } from "../inputs/EnumBugReportSeverityFieldUpdateOperationsInput";
import { EnumReportStatusFieldUpdateOperationsInput } from "../inputs/EnumReportStatusFieldUpdateOperationsInput";
import { EnumRequestTypeFieldUpdateOperationsInput } from "../inputs/EnumRequestTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportUpdateWithoutCreatorInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumBugReportSeverityFieldUpdateOperationsInput, {
    nullable: true
  })
  severity?: EnumBugReportSeverityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRequestTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumRequestTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumReportStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumReportStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentUpdateManyWithoutReportInput, {
    nullable: true
  })
  attachments?: AttachmentUpdateManyWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutReportInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutReportInput | undefined;
}
