import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateManyProfileInputEnvelope } from "../inputs/LabelCreateManyProfileInputEnvelope";
import { LabelCreateOrConnectWithoutProfileInput } from "../inputs/LabelCreateOrConnectWithoutProfileInput";
import { LabelCreateWithoutProfileInput } from "../inputs/LabelCreateWithoutProfileInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelCreateNestedManyWithoutProfileInput {
  @TypeGraphQL.Field(_type => [LabelCreateWithoutProfileInput], {
    nullable: true
  })
  create?: LabelCreateWithoutProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelCreateOrConnectWithoutProfileInput], {
    nullable: true
  })
  connectOrCreate?: LabelCreateOrConnectWithoutProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => LabelCreateManyProfileInputEnvelope, {
    nullable: true
  })
  createMany?: LabelCreateManyProfileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  connect?: LabelWhereUniqueInput[] | undefined;
}
