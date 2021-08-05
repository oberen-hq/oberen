import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostCommentInput } from "../inputs/UserCreateOrConnectWithoutPostCommentInput";
import { UserCreateWithoutPostCommentInput } from "../inputs/UserCreateWithoutPostCommentInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutPostCommentInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostCommentInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostCommentInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
