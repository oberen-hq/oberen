import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutSettingsInput } from "../inputs/UserProfileCreateOrConnectWithoutSettingsInput";
import { UserProfileCreateWithoutSettingsInput } from "../inputs/UserProfileCreateWithoutSettingsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateNestedOneWithoutSettingsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;
}
