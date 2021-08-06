import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostCommentInput } from "../inputs/UserCreateWithoutPostCommentInput";
import { UserUpdateWithoutPostCommentInput } from "../inputs/UserUpdateWithoutPostCommentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutPostCommentInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPostCommentInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostCommentInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostCommentInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostCommentInput;
}
