import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateNestedOneWithoutSettingsInput } from "../inputs/UserProfileCreateNestedOneWithoutSettingsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserSettingsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutSettingsInput, {
    nullable: false
  })
  userProfile!: UserProfileCreateNestedOneWithoutSettingsInput;
}
