import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateManyCreatorInputEnvelope } from "../inputs/ReportCreateManyCreatorInputEnvelope";
import { ReportCreateOrConnectWithoutCreatorInput } from "../inputs/ReportCreateOrConnectWithoutCreatorInput";
import { ReportCreateWithoutCreatorInput } from "../inputs/ReportCreateWithoutCreatorInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [ReportCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: ReportCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => ReportCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: ReportCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  connect?: ReportWhereUniqueInput[] | undefined;
}
