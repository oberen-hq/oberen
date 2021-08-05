import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyPostInputEnvelope } from "../inputs/UserCreateManyPostInputEnvelope";
import { UserCreateOrConnectWithoutPostInput } from "../inputs/UserCreateOrConnectWithoutPostInput";
import { UserCreateWithoutPostInput } from "../inputs/UserCreateWithoutPostInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutPostInput } from "../inputs/UserUpdateManyWithWhereWithoutPostInput";
import { UserUpdateWithWhereUniqueWithoutPostInput } from "../inputs/UserUpdateWithWhereUniqueWithoutPostInput";
import { UserUpsertWithWhereUniqueWithoutPostInput } from "../inputs/UserUpsertWithWhereUniqueWithoutPostInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutPostInput], {
    nullable: true
  })
  create?: UserCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
