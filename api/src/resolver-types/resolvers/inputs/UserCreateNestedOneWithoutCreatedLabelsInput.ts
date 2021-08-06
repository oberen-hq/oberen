import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedLabelsInput } from "../inputs/UserCreateOrConnectWithoutCreatedLabelsInput";
import { UserCreateWithoutCreatedLabelsInput } from "../inputs/UserCreateWithoutCreatedLabelsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatedLabelsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedLabelsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedLabelsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
