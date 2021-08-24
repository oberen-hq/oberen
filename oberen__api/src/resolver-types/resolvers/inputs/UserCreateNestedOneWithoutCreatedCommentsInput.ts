import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedCommentsInput } from "../inputs/UserCreateOrConnectWithoutCreatedCommentsInput";
import { UserCreateWithoutCreatedCommentsInput } from "../inputs/UserCreateWithoutCreatedCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatedCommentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
