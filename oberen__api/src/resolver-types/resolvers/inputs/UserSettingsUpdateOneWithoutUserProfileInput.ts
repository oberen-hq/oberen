import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSettingsCreateOrConnectWithoutUserProfileInput } from "../inputs/UserSettingsCreateOrConnectWithoutUserProfileInput";
import { UserSettingsCreateWithoutUserProfileInput } from "../inputs/UserSettingsCreateWithoutUserProfileInput";
import { UserSettingsUpdateWithoutUserProfileInput } from "../inputs/UserSettingsUpdateWithoutUserProfileInput";
import { UserSettingsUpsertWithoutUserProfileInput } from "../inputs/UserSettingsUpsertWithoutUserProfileInput";
import { UserSettingsWhereUniqueInput } from "../inputs/UserSettingsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserSettingsUpdateOneWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserSettingsCreateWithoutUserProfileInput, {
    nullable: true
  })
  create?: UserSettingsCreateWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserSettingsCreateOrConnectWithoutUserProfileInput, {
    nullable: true
  })
  connectOrCreate?: UserSettingsCreateOrConnectWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserSettingsUpsertWithoutUserProfileInput, {
    nullable: true
  })
  upsert?: UserSettingsUpsertWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: UserSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserSettingsUpdateWithoutUserProfileInput, {
    nullable: true
  })
  update?: UserSettingsUpdateWithoutUserProfileInput | undefined;
}
