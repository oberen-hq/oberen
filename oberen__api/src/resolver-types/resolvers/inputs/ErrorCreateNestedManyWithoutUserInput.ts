import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorCreateManyUserInputEnvelope } from "../inputs/ErrorCreateManyUserInputEnvelope";
import { ErrorCreateOrConnectWithoutUserInput } from "../inputs/ErrorCreateOrConnectWithoutUserInput";
import { ErrorCreateWithoutUserInput } from "../inputs/ErrorCreateWithoutUserInput";
import { ErrorWhereUniqueInput } from "../inputs/ErrorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ErrorCreateWithoutUserInput], {
    nullable: true
  })
  create?: ErrorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ErrorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ErrorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ErrorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ErrorWhereUniqueInput], {
    nullable: true
  })
  connect?: ErrorWhereUniqueInput[] | undefined;
}
