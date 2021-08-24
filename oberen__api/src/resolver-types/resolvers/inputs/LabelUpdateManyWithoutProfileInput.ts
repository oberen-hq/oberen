import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateManyProfileInputEnvelope } from "../inputs/LabelCreateManyProfileInputEnvelope";
import { LabelCreateOrConnectWithoutProfileInput } from "../inputs/LabelCreateOrConnectWithoutProfileInput";
import { LabelCreateWithoutProfileInput } from "../inputs/LabelCreateWithoutProfileInput";
import { LabelScalarWhereInput } from "../inputs/LabelScalarWhereInput";
import { LabelUpdateManyWithWhereWithoutProfileInput } from "../inputs/LabelUpdateManyWithWhereWithoutProfileInput";
import { LabelUpdateWithWhereUniqueWithoutProfileInput } from "../inputs/LabelUpdateWithWhereUniqueWithoutProfileInput";
import { LabelUpsertWithWhereUniqueWithoutProfileInput } from "../inputs/LabelUpsertWithWhereUniqueWithoutProfileInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelUpdateManyWithoutProfileInput {
  @TypeGraphQL.Field(_type => [LabelCreateWithoutProfileInput], {
    nullable: true
  })
  create?: LabelCreateWithoutProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelCreateOrConnectWithoutProfileInput], {
    nullable: true
  })
  connectOrCreate?: LabelCreateOrConnectWithoutProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpsertWithWhereUniqueWithoutProfileInput], {
    nullable: true
  })
  upsert?: LabelUpsertWithWhereUniqueWithoutProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => LabelCreateManyProfileInputEnvelope, {
    nullable: true
  })
  createMany?: LabelCreateManyProfileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  connect?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  set?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  delete?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpdateWithWhereUniqueWithoutProfileInput], {
    nullable: true
  })
  update?: LabelUpdateWithWhereUniqueWithoutProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpdateManyWithWhereWithoutProfileInput], {
    nullable: true
  })
  updateMany?: LabelUpdateManyWithWhereWithoutProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LabelScalarWhereInput[] | undefined;
}
