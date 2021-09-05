import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOwnedOrganizationsInput } from "../inputs/UserCreateWithoutOwnedOrganizationsInput";
import { UserUpdateWithoutOwnedOrganizationsInput } from "../inputs/UserUpdateWithoutOwnedOrganizationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutOwnedOrganizationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutOwnedOrganizationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOwnedOrganizationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOwnedOrganizationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwnedOrganizationsInput;
}
