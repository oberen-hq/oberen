import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateWithoutReportInput } from "../inputs/AttachmentCreateWithoutReportInput";
import { AttachmentUpdateWithoutReportInput } from "../inputs/AttachmentUpdateWithoutReportInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpsertWithWhereUniqueWithoutReportInput {
  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttachmentUpdateWithoutReportInput, {
    nullable: false
  })
  update!: AttachmentUpdateWithoutReportInput;

  @TypeGraphQL.Field(_type => AttachmentCreateWithoutReportInput, {
    nullable: false
  })
  create!: AttachmentCreateWithoutReportInput;
}
