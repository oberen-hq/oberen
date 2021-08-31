import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateManyCreatorInputEnvelope } from "../inputs/LabelCreateManyCreatorInputEnvelope";
import { LabelCreateOrConnectWithoutCreatorInput } from "../inputs/LabelCreateOrConnectWithoutCreatorInput";
import { LabelCreateWithoutCreatorInput } from "../inputs/LabelCreateWithoutCreatorInput";
import { LabelScalarWhereInput } from "../inputs/LabelScalarWhereInput";
import { LabelUpdateManyWithWhereWithoutCreatorInput } from "../inputs/LabelUpdateManyWithWhereWithoutCreatorInput";
import { LabelUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/LabelUpdateWithWhereUniqueWithoutCreatorInput";
import { LabelUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/LabelUpsertWithWhereUniqueWithoutCreatorInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [LabelCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: LabelCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: LabelCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: LabelUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => LabelCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: LabelCreateManyCreatorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LabelUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: LabelUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: LabelUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LabelScalarWhereInput[] | undefined;
}
