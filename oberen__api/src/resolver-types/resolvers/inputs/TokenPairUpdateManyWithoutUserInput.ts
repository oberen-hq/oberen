import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenPairCreateManyUserInputEnvelope } from "../inputs/TokenPairCreateManyUserInputEnvelope";
import { TokenPairCreateOrConnectWithoutUserInput } from "../inputs/TokenPairCreateOrConnectWithoutUserInput";
import { TokenPairCreateWithoutUserInput } from "../inputs/TokenPairCreateWithoutUserInput";
import { TokenPairScalarWhereInput } from "../inputs/TokenPairScalarWhereInput";
import { TokenPairUpdateManyWithWhereWithoutUserInput } from "../inputs/TokenPairUpdateManyWithWhereWithoutUserInput";
import { TokenPairUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TokenPairUpdateWithWhereUniqueWithoutUserInput";
import { TokenPairUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TokenPairUpsertWithWhereUniqueWithoutUserInput";
import { TokenPairWhereUniqueInput } from "../inputs/TokenPairWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenPairUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TokenPairCreateWithoutUserInput], {
    nullable: true
  })
  create?: TokenPairCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TokenPairCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TokenPairUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenPairCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TokenPairCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TokenPairWhereUniqueInput], {
    nullable: true
  })
  connect?: TokenPairWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairWhereUniqueInput], {
    nullable: true
  })
  set?: TokenPairWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TokenPairWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairWhereUniqueInput], {
    nullable: true
  })
  delete?: TokenPairWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TokenPairUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TokenPairUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TokenPairScalarWhereInput[] | undefined;
}
