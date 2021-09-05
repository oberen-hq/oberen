import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSettingsCreateWithoutUserProfileInput } from "../inputs/UserSettingsCreateWithoutUserProfileInput";
import { UserSettingsUpdateWithoutUserProfileInput } from "../inputs/UserSettingsUpdateWithoutUserProfileInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserSettingsUpsertWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserSettingsUpdateWithoutUserProfileInput, {
    nullable: false
  })
  update!: UserSettingsUpdateWithoutUserProfileInput;

  @TypeGraphQL.Field(_type => UserSettingsCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserSettingsCreateWithoutUserProfileInput;
}
