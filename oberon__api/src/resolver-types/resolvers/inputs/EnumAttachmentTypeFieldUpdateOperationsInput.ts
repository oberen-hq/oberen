import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumAttachmentTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: true
  })
  set?: "image" | "video" | "organization" | "post" | "other" | undefined;
}
