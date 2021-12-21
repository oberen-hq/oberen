import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingCreateManyUserInputEnvelope } from "../inputs/FollowingCreateManyUserInputEnvelope";
import { FollowingCreateOrConnectWithoutUserInput } from "../inputs/FollowingCreateOrConnectWithoutUserInput";
import { FollowingCreateWithoutUserInput } from "../inputs/FollowingCreateWithoutUserInput";
import { FollowingScalarWhereInput } from "../inputs/FollowingScalarWhereInput";
import { FollowingUpdateManyWithWhereWithoutUserInput } from "../inputs/FollowingUpdateManyWithWhereWithoutUserInput";
import { FollowingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/FollowingUpdateWithWhereUniqueWithoutUserInput";
import { FollowingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/FollowingUpsertWithWhereUniqueWithoutUserInput";
import { FollowingWhereUniqueInput } from "../inputs/FollowingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [FollowingCreateWithoutUserInput], {
    nullable: true
  })
  create?: FollowingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FollowingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: FollowingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FollowingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowingWhereUniqueInput], {
    nullable: true
  })
  connect?: FollowingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingWhereUniqueInput], {
    nullable: true
  })
  set?: FollowingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FollowingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingWhereUniqueInput], {
    nullable: true
  })
  delete?: FollowingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: FollowingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: FollowingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FollowingScalarWhereInput[] | undefined;
}
