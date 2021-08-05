import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedPostsInput } from "../inputs/UserCreateOrConnectWithoutLikedPostsInput";
import { UserCreateWithoutLikedPostsInput } from "../inputs/UserCreateWithoutLikedPostsInput";
import { UserUpdateWithoutLikedPostsInput } from "../inputs/UserUpdateWithoutLikedPostsInput";
import { UserUpsertWithoutLikedPostsInput } from "../inputs/UserUpsertWithoutLikedPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutLikedPostsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLikedPostsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLikedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedPostsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLikedPostsInput | undefined;
}
