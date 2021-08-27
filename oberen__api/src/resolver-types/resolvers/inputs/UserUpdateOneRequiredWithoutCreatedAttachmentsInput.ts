import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedAttachmentsInput } from "../inputs/UserCreateOrConnectWithoutCreatedAttachmentsInput";
import { UserCreateWithoutCreatedAttachmentsInput } from "../inputs/UserCreateWithoutCreatedAttachmentsInput";
import { UserUpdateWithoutCreatedAttachmentsInput } from "../inputs/UserUpdateWithoutCreatedAttachmentsInput";
import { UserUpsertWithoutCreatedAttachmentsInput } from "../inputs/UserUpsertWithoutCreatedAttachmentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCreatedAttachmentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedAttachmentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedAttachmentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatedAttachmentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedAttachmentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatedAttachmentsInput | undefined;
}
