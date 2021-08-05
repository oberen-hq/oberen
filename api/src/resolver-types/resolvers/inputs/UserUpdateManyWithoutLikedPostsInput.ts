import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedPostsInput } from "../inputs/UserCreateOrConnectWithoutLikedPostsInput";
import { UserCreateWithoutLikedPostsInput } from "../inputs/UserCreateWithoutLikedPostsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutLikedPostsInput } from "../inputs/UserUpdateManyWithWhereWithoutLikedPostsInput";
import { UserUpdateWithWhereUniqueWithoutLikedPostsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutLikedPostsInput";
import { UserUpsertWithWhereUniqueWithoutLikedPostsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutLikedPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutLikedPostsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutLikedPostsInput], {
    nullable: true
  })
  create?: UserCreateWithoutLikedPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedPostsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutLikedPostsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutLikedPostsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutLikedPostsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutLikedPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutLikedPostsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutLikedPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
