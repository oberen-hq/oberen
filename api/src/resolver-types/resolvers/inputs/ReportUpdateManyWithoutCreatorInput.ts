import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateManyCreatorInputEnvelope } from "../inputs/ReportCreateManyCreatorInputEnvelope";
import { ReportCreateOrConnectWithoutCreatorInput } from "../inputs/ReportCreateOrConnectWithoutCreatorInput";
import { ReportCreateWithoutCreatorInput } from "../inputs/ReportCreateWithoutCreatorInput";
import { ReportScalarWhereInput } from "../inputs/ReportScalarWhereInput";
import { ReportUpdateManyWithWhereWithoutCreatorInput } from "../inputs/ReportUpdateManyWithWhereWithoutCreatorInput";
import { ReportUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/ReportUpdateWithWhereUniqueWithoutCreatorInput";
import { ReportUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/ReportUpsertWithWhereUniqueWithoutCreatorInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [ReportCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: ReportCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: ReportUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => ReportCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: ReportCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  connect?: ReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  set?: ReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  delete?: ReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: ReportUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: ReportUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReportScalarWhereInput[] | undefined;
}
