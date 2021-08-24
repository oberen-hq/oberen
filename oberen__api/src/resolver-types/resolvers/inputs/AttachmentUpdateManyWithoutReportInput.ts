import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateManyReportInputEnvelope } from "../inputs/AttachmentCreateManyReportInputEnvelope";
import { AttachmentCreateOrConnectWithoutReportInput } from "../inputs/AttachmentCreateOrConnectWithoutReportInput";
import { AttachmentCreateWithoutReportInput } from "../inputs/AttachmentCreateWithoutReportInput";
import { AttachmentScalarWhereInput } from "../inputs/AttachmentScalarWhereInput";
import { AttachmentUpdateManyWithWhereWithoutReportInput } from "../inputs/AttachmentUpdateManyWithWhereWithoutReportInput";
import { AttachmentUpdateWithWhereUniqueWithoutReportInput } from "../inputs/AttachmentUpdateWithWhereUniqueWithoutReportInput";
import { AttachmentUpsertWithWhereUniqueWithoutReportInput } from "../inputs/AttachmentUpsertWithWhereUniqueWithoutReportInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateManyWithoutReportInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutReportInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutReportInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpsertWithWhereUniqueWithoutReportInput], {
    nullable: true
  })
  upsert?: AttachmentUpsertWithWhereUniqueWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateManyReportInputEnvelope, {
    nullable: true
  })
  createMany?: AttachmentCreateManyReportInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  set?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  delete?: AttachmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpdateWithWhereUniqueWithoutReportInput], {
    nullable: true
  })
  update?: AttachmentUpdateWithWhereUniqueWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpdateManyWithWhereWithoutReportInput], {
    nullable: true
  })
  updateMany?: AttachmentUpdateManyWithWhereWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttachmentScalarWhereInput[] | undefined;
}
