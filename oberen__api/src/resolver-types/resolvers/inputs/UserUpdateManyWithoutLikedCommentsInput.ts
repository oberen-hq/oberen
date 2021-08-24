import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedCommentsInput } from "../inputs/UserCreateOrConnectWithoutLikedCommentsInput";
import { UserCreateWithoutLikedCommentsInput } from "../inputs/UserCreateWithoutLikedCommentsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutLikedCommentsInput } from "../inputs/UserUpdateManyWithWhereWithoutLikedCommentsInput";
import { UserUpdateWithWhereUniqueWithoutLikedCommentsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutLikedCommentsInput";
import { UserUpsertWithWhereUniqueWithoutLikedCommentsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutLikedCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutLikedCommentsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutLikedCommentsInput], {
    nullable: true
  })
  create?: UserCreateWithoutLikedCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedCommentsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutLikedCommentsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutLikedCommentsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutLikedCommentsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutLikedCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutLikedCommentsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutLikedCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
