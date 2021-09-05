import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSettingsCreateWithoutUserProfileInput } from "../inputs/UserSettingsCreateWithoutUserProfileInput";
import { UserSettingsWhereUniqueInput } from "../inputs/UserSettingsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserSettingsCreateOrConnectWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: UserSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserSettingsCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserSettingsCreateWithoutUserProfileInput;
}
