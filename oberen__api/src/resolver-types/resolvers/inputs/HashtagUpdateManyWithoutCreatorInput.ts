import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateManyCreatorInputEnvelope } from "../inputs/HashtagCreateManyCreatorInputEnvelope";
import { HashtagCreateOrConnectWithoutCreatorInput } from "../inputs/HashtagCreateOrConnectWithoutCreatorInput";
import { HashtagCreateWithoutCreatorInput } from "../inputs/HashtagCreateWithoutCreatorInput";
import { HashtagScalarWhereInput } from "../inputs/HashtagScalarWhereInput";
import { HashtagUpdateManyWithWhereWithoutCreatorInput } from "../inputs/HashtagUpdateManyWithWhereWithoutCreatorInput";
import { HashtagUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/HashtagUpdateWithWhereUniqueWithoutCreatorInput";
import { HashtagUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/HashtagUpsertWithWhereUniqueWithoutCreatorInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [HashtagCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: HashtagCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: HashtagCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: HashtagUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => HashtagCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: HashtagCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  connect?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  set?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  delete?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: HashtagUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: HashtagUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: HashtagScalarWhereInput[] | undefined;
}
