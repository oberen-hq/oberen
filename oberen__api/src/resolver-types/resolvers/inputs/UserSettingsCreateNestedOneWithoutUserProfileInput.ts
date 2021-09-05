import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSettingsCreateOrConnectWithoutUserProfileInput } from "../inputs/UserSettingsCreateOrConnectWithoutUserProfileInput";
import { UserSettingsCreateWithoutUserProfileInput } from "../inputs/UserSettingsCreateWithoutUserProfileInput";
import { UserSettingsWhereUniqueInput } from "../inputs/UserSettingsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserSettingsCreateNestedOneWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserSettingsCreateWithoutUserProfileInput, {
    nullable: true
  })
  create?: UserSettingsCreateWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserSettingsCreateOrConnectWithoutUserProfileInput, {
    nullable: true
  })
  connectOrCreate?: UserSettingsCreateOrConnectWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: UserSettingsWhereUniqueInput | undefined;
}
