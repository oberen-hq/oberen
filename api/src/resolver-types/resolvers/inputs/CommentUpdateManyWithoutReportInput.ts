import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyReportInputEnvelope } from "../inputs/CommentCreateManyReportInputEnvelope";
import { CommentCreateOrConnectWithoutReportInput } from "../inputs/CommentCreateOrConnectWithoutReportInput";
import { CommentCreateWithoutReportInput } from "../inputs/CommentCreateWithoutReportInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutReportInput } from "../inputs/CommentUpdateManyWithWhereWithoutReportInput";
import { CommentUpdateWithWhereUniqueWithoutReportInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutReportInput";
import { CommentUpsertWithWhereUniqueWithoutReportInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutReportInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateManyWithoutReportInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutReportInput], {
    nullable: true
  })
  create?: CommentCreateWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutReportInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutReportInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyReportInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyReportInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutReportInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutReportInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
