import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostCommentInput } from "../inputs/UserCreateOrConnectWithoutPostCommentInput";
import { UserCreateWithoutPostCommentInput } from "../inputs/UserCreateWithoutPostCommentInput";
import { UserUpdateWithoutPostCommentInput } from "../inputs/UserUpdateWithoutPostCommentInput";
import { UserUpsertWithoutPostCommentInput } from "../inputs/UserUpsertWithoutPostCommentInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPostCommentInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostCommentInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostCommentInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPostCommentInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPostCommentInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPostCommentInput | undefined;
}
