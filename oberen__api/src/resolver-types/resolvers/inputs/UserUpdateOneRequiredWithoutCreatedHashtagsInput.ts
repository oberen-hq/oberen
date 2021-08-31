import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedHashtagsInput } from "../inputs/UserCreateOrConnectWithoutCreatedHashtagsInput";
import { UserCreateWithoutCreatedHashtagsInput } from "../inputs/UserCreateWithoutCreatedHashtagsInput";
import { UserUpdateWithoutCreatedHashtagsInput } from "../inputs/UserUpdateWithoutCreatedHashtagsInput";
import { UserUpsertWithoutCreatedHashtagsInput } from "../inputs/UserUpsertWithoutCreatedHashtagsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCreatedHashtagsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedHashtagsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedHashtagsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedHashtagsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedHashtagsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatedHashtagsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedHashtagsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedHashtagsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatedHashtagsInput | undefined;
}
