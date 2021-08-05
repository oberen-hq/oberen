import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedPostsInput } from "../inputs/UserCreateOrConnectWithoutLikedPostsInput";
import { UserCreateWithoutLikedPostsInput } from "../inputs/UserCreateWithoutLikedPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutLikedPostsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
