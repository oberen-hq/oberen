import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateManyReportInput } from "../inputs/AttachmentCreateManyReportInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateManyReportInputEnvelope {
  @TypeGraphQL.Field(_type => [AttachmentCreateManyReportInput], {
    nullable: false
  })
  data!: AttachmentCreateManyReportInput[];
}
