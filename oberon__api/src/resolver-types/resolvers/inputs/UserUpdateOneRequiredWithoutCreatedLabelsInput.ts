import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedLabelsInput } from "../inputs/UserCreateOrConnectWithoutCreatedLabelsInput";
import { UserCreateWithoutCreatedLabelsInput } from "../inputs/UserCreateWithoutCreatedLabelsInput";
import { UserUpdateWithoutCreatedLabelsInput } from "../inputs/UserUpdateWithoutCreatedLabelsInput";
import { UserUpsertWithoutCreatedLabelsInput } from "../inputs/UserUpsertWithoutCreatedLabelsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCreatedLabelsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedLabelsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedLabelsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatedLabelsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedLabelsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatedLabelsInput | undefined;
}
