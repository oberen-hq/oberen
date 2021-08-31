import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateManyCreatorInputEnvelope } from "../inputs/HashtagCreateManyCreatorInputEnvelope";
import { HashtagCreateOrConnectWithoutCreatorInput } from "../inputs/HashtagCreateOrConnectWithoutCreatorInput";
import { HashtagCreateWithoutCreatorInput } from "../inputs/HashtagCreateWithoutCreatorInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [HashtagCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: HashtagCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: HashtagCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => HashtagCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: HashtagCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  connect?: HashtagWhereUniqueInput[] | undefined;
}
