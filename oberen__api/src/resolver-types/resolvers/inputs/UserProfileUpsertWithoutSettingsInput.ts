import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutSettingsInput } from "../inputs/UserProfileCreateWithoutSettingsInput";
import { UserProfileUpdateWithoutSettingsInput } from "../inputs/UserProfileUpdateWithoutSettingsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpsertWithoutSettingsInput {
  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutSettingsInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutSettingsInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutSettingsInput;
}
