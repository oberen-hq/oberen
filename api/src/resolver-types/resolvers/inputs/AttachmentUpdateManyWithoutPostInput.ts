import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateManyPostInputEnvelope } from "../inputs/AttachmentCreateManyPostInputEnvelope";
import { AttachmentCreateOrConnectWithoutPostInput } from "../inputs/AttachmentCreateOrConnectWithoutPostInput";
import { AttachmentCreateWithoutPostInput } from "../inputs/AttachmentCreateWithoutPostInput";
import { AttachmentScalarWhereInput } from "../inputs/AttachmentScalarWhereInput";
import { AttachmentUpdateManyWithWhereWithoutPostInput } from "../inputs/AttachmentUpdateManyWithWhereWithoutPostInput";
import { AttachmentUpdateWithWhereUniqueWithoutPostInput } from "../inputs/AttachmentUpdateWithWhereUniqueWithoutPostInput";
import { AttachmentUpsertWithWhereUniqueWithoutPostInput } from "../inputs/AttachmentUpsertWithWhereUniqueWithoutPostInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutPostInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: AttachmentUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: AttachmentCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AttachmentUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: AttachmentUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: AttachmentUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttachmentScalarWhereInput[] | undefined;
}
