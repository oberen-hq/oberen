import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorCreateManyUserInputEnvelope } from "../inputs/ErrorCreateManyUserInputEnvelope";
import { ErrorCreateOrConnectWithoutUserInput } from "../inputs/ErrorCreateOrConnectWithoutUserInput";
import { ErrorCreateWithoutUserInput } from "../inputs/ErrorCreateWithoutUserInput";
import { ErrorScalarWhereInput } from "../inputs/ErrorScalarWhereInput";
import { ErrorUpdateManyWithWhereWithoutUserInput } from "../inputs/ErrorUpdateManyWithWhereWithoutUserInput";
import { ErrorUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ErrorUpdateWithWhereUniqueWithoutUserInput";
import { ErrorUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ErrorUpsertWithWhereUniqueWithoutUserInput";
import { ErrorWhereUniqueInput } from "../inputs/ErrorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ErrorCreateWithoutUserInput], {
    nullable: true
  })
  create?: ErrorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ErrorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ErrorUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ErrorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ErrorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ErrorWhereUniqueInput], {
    nullable: true
  })
  connect?: ErrorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorWhereUniqueInput], {
    nullable: true
  })
  set?: ErrorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ErrorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorWhereUniqueInput], {
    nullable: true
  })
  delete?: ErrorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ErrorUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ErrorUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ErrorScalarWhereInput[] | undefined;
}
