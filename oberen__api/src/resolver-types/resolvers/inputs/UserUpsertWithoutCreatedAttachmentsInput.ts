import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedAttachmentsInput } from "../inputs/UserCreateWithoutCreatedAttachmentsInput";
import { UserUpdateWithoutCreatedAttachmentsInput } from "../inputs/UserUpdateWithoutCreatedAttachmentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCreatedAttachmentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedAttachmentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedAttachmentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedAttachmentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedAttachmentsInput;
}
