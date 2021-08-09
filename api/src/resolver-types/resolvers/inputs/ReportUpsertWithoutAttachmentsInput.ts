import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutAttachmentsInput } from "../inputs/ReportCreateWithoutAttachmentsInput";
import { ReportUpdateWithoutAttachmentsInput } from "../inputs/ReportUpdateWithoutAttachmentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportUpsertWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => ReportUpdateWithoutAttachmentsInput, {
    nullable: false
  })
  update!: ReportUpdateWithoutAttachmentsInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutAttachmentsInput, {
    nullable: false
  })
  create!: ReportCreateWithoutAttachmentsInput;
}
