import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateManyReportInputEnvelope } from "../inputs/AttachmentCreateManyReportInputEnvelope";
import { AttachmentCreateOrConnectWithoutReportInput } from "../inputs/AttachmentCreateOrConnectWithoutReportInput";
import { AttachmentCreateWithoutReportInput } from "../inputs/AttachmentCreateWithoutReportInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateNestedManyWithoutReportInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutReportInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutReportInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateManyReportInputEnvelope, {
    nullable: true
  })
  createMany?: AttachmentCreateManyReportInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AttachmentWhereUniqueInput[] | undefined;
}
