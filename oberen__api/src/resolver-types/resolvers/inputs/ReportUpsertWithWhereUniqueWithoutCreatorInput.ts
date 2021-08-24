import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutCreatorInput } from "../inputs/ReportCreateWithoutCreatorInput";
import { ReportUpdateWithoutCreatorInput } from "../inputs/ReportUpdateWithoutCreatorInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReportUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: ReportUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: ReportCreateWithoutCreatorInput;
}