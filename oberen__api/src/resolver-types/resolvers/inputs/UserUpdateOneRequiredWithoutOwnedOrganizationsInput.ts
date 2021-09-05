import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOwnedOrganizationsInput } from "../inputs/UserCreateOrConnectWithoutOwnedOrganizationsInput";
import { UserCreateWithoutOwnedOrganizationsInput } from "../inputs/UserCreateWithoutOwnedOrganizationsInput";
import { UserUpdateWithoutOwnedOrganizationsInput } from "../inputs/UserUpdateWithoutOwnedOrganizationsInput";
import { UserUpsertWithoutOwnedOrganizationsInput } from "../inputs/UserUpsertWithoutOwnedOrganizationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutOwnedOrganizationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOwnedOrganizationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutOwnedOrganizationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOwnedOrganizationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOwnedOrganizationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutOwnedOrganizationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutOwnedOrganizationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutOwnedOrganizationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutOwnedOrganizationsInput | undefined;
}
