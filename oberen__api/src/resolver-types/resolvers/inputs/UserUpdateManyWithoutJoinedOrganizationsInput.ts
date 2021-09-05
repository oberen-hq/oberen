import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutJoinedOrganizationsInput } from "../inputs/UserCreateOrConnectWithoutJoinedOrganizationsInput";
import { UserCreateWithoutJoinedOrganizationsInput } from "../inputs/UserCreateWithoutJoinedOrganizationsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutJoinedOrganizationsInput } from "../inputs/UserUpdateManyWithWhereWithoutJoinedOrganizationsInput";
import { UserUpdateWithWhereUniqueWithoutJoinedOrganizationsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutJoinedOrganizationsInput";
import { UserUpsertWithWhereUniqueWithoutJoinedOrganizationsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutJoinedOrganizationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutJoinedOrganizationsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutJoinedOrganizationsInput], {
    nullable: true
  })
  create?: UserCreateWithoutJoinedOrganizationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutJoinedOrganizationsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutJoinedOrganizationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutJoinedOrganizationsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutJoinedOrganizationsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutJoinedOrganizationsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutJoinedOrganizationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutJoinedOrganizationsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutJoinedOrganizationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
