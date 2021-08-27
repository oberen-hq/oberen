import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateManyCreatorInputEnvelope } from "../inputs/AttachmentCreateManyCreatorInputEnvelope";
import { AttachmentCreateOrConnectWithoutCreatorInput } from "../inputs/AttachmentCreateOrConnectWithoutCreatorInput";
import { AttachmentCreateWithoutCreatorInput } from "../inputs/AttachmentCreateWithoutCreatorInput";
import { AttachmentScalarWhereInput } from "../inputs/AttachmentScalarWhereInput";
import { AttachmentUpdateManyWithWhereWithoutCreatorInput } from "../inputs/AttachmentUpdateManyWithWhereWithoutCreatorInput";
import { AttachmentUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/AttachmentUpdateWithWhereUniqueWithoutCreatorInput";
import { AttachmentUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/AttachmentUpsertWithWhereUniqueWithoutCreatorInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: AttachmentUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: AttachmentCreateManyCreatorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AttachmentUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: AttachmentUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: AttachmentUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttachmentScalarWhereInput[] | undefined;
}
