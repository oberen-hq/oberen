import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutAttachmentsInput } from "../inputs/PostCreateNestedOneWithoutAttachmentsInput";
import { ReportCreateNestedOneWithoutAttachmentsInput } from "../inputs/ReportCreateNestedOneWithoutAttachmentsInput";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentUrl!: string;

  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: false
  })
  type!: "image" | "video" | "organization" | "post" | "other";

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutAttachmentsInput, {
    nullable: true
  })
  post?: PostCreateNestedOneWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateNestedOneWithoutAttachmentsInput, {
    nullable: false
  })
  report!: ReportCreateNestedOneWithoutAttachmentsInput;
}