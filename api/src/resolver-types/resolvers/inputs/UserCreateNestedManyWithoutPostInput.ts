import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyPostInputEnvelope } from "../inputs/UserCreateManyPostInputEnvelope";
import { UserCreateOrConnectWithoutPostInput } from "../inputs/UserCreateOrConnectWithoutPostInput";
import { UserCreateWithoutPostInput } from "../inputs/UserCreateWithoutPostInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutPostInput], {
    nullable: true
  })
  create?: UserCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
