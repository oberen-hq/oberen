import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingCreateManyUserInputEnvelope } from "../inputs/FollowingCreateManyUserInputEnvelope";
import { FollowingCreateOrConnectWithoutUserInput } from "../inputs/FollowingCreateOrConnectWithoutUserInput";
import { FollowingCreateWithoutUserInput } from "../inputs/FollowingCreateWithoutUserInput";
import { FollowingWhereUniqueInput } from "../inputs/FollowingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [FollowingCreateWithoutUserInput], {
    nullable: true
  })
  create?: FollowingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FollowingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FollowingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowingWhereUniqueInput], {
    nullable: true
  })
  connect?: FollowingWhereUniqueInput[] | undefined;
}
