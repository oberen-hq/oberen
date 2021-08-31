import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedHashtagsInput } from "../inputs/UserCreateOrConnectWithoutCreatedHashtagsInput";
import { UserCreateWithoutCreatedHashtagsInput } from "../inputs/UserCreateWithoutCreatedHashtagsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatedHashtagsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedHashtagsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedHashtagsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedHashtagsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedHashtagsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
