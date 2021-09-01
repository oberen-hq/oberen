import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenPairCreateManyUserInputEnvelope } from "../inputs/TokenPairCreateManyUserInputEnvelope";
import { TokenPairCreateOrConnectWithoutUserInput } from "../inputs/TokenPairCreateOrConnectWithoutUserInput";
import { TokenPairCreateWithoutUserInput } from "../inputs/TokenPairCreateWithoutUserInput";
import { TokenPairWhereUniqueInput } from "../inputs/TokenPairWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TokenPairCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TokenPairCreateWithoutUserInput], {
    nullable: true
  })
  create?: TokenPairCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenPairCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TokenPairCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenPairCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TokenPairCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TokenPairWhereUniqueInput], {
    nullable: true
  })
  connect?: TokenPairWhereUniqueInput[] | undefined;
}
