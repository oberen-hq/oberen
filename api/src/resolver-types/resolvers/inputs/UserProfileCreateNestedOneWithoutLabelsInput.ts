import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutLabelsInput } from "../inputs/UserProfileCreateOrConnectWithoutLabelsInput";
import { UserProfileCreateWithoutLabelsInput } from "../inputs/UserProfileCreateWithoutLabelsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateNestedOneWithoutLabelsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutLabelsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutLabelsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;
}
