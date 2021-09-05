import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutErrorsInput } from "../inputs/UserCreateOrConnectWithoutErrorsInput";
import { UserCreateWithoutErrorsInput } from "../inputs/UserCreateWithoutErrorsInput";
import { UserUpdateWithoutErrorsInput } from "../inputs/UserUpdateWithoutErrorsInput";
import { UserUpsertWithoutErrorsInput } from "../inputs/UserUpsertWithoutErrorsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutErrorsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutErrorsInput, {
    nullable: true
  })
  create?: UserCreateWithoutErrorsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutErrorsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutErrorsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutErrorsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutErrorsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutErrorsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutErrorsInput | undefined;
}
