import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutSettingsInput } from "../inputs/UserProfileCreateOrConnectWithoutSettingsInput";
import { UserProfileCreateWithoutSettingsInput } from "../inputs/UserProfileCreateWithoutSettingsInput";
import { UserProfileUpdateWithoutSettingsInput } from "../inputs/UserProfileUpdateWithoutSettingsInput";
import { UserProfileUpsertWithoutSettingsInput } from "../inputs/UserProfileUpsertWithoutSettingsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpdateOneRequiredWithoutSettingsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutSettingsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutSettingsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpsertWithoutSettingsInput, {
    nullable: true
  })
  upsert?: UserProfileUpsertWithoutSettingsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutSettingsInput, {
    nullable: true
  })
  update?: UserProfileUpdateWithoutSettingsInput | undefined;
}
