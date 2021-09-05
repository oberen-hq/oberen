import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutJoinedOrganizationsInput } from "../inputs/UserCreateWithoutJoinedOrganizationsInput";
import { UserUpdateWithoutJoinedOrganizationsInput } from "../inputs/UserUpdateWithoutJoinedOrganizationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutJoinedOrganizationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutJoinedOrganizationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutJoinedOrganizationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutJoinedOrganizationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutJoinedOrganizationsInput;
}
