import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutJoinedOrganizationsInput } from "../inputs/UserCreateNestedManyWithoutJoinedOrganizationsInput";
import { UserCreateNestedOneWithoutOwnedOrganizationsInput } from "../inputs/UserCreateNestedOneWithoutOwnedOrganizationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOwnedOrganizationsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutOwnedOrganizationsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutJoinedOrganizationsInput, {
    nullable: true
  })
  employees?: UserCreateNestedManyWithoutJoinedOrganizationsInput | undefined;
}
