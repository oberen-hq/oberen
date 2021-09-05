import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSettingsWhereInput } from "../inputs/UserSettingsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserSettingsRelationFilter {
  @TypeGraphQL.Field(_type => UserSettingsWhereInput, {
    nullable: true
  })
  is?: UserSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserSettingsWhereInput, {
    nullable: true
  })
  isNot?: UserSettingsWhereInput | undefined;
}
