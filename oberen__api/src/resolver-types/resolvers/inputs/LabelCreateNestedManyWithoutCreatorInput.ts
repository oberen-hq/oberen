import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateManyCreatorInputEnvelope } from "../inputs/LabelCreateManyCreatorInputEnvelope";
import { LabelCreateOrConnectWithoutCreatorInput } from "../inputs/LabelCreateOrConnectWithoutCreatorInput";
import { LabelCreateWithoutCreatorInput } from "../inputs/LabelCreateWithoutCreatorInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [LabelCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: LabelCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: LabelCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => LabelCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: LabelCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  connect?: LabelWhereUniqueInput[] | undefined;
}
