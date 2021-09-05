import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutJoinedOrganizationsInput } from "../inputs/UserCreateOrConnectWithoutJoinedOrganizationsInput";
import { UserCreateWithoutJoinedOrganizationsInput } from "../inputs/UserCreateWithoutJoinedOrganizationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutJoinedOrganizationsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutJoinedOrganizationsInput], {
    nullable: true
  })
  create?: UserCreateWithoutJoinedOrganizationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutJoinedOrganizationsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutJoinedOrganizationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
