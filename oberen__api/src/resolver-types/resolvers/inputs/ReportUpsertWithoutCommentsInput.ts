import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutCommentsInput } from "../inputs/ReportCreateWithoutCommentsInput";
import { ReportUpdateWithoutCommentsInput } from "../inputs/ReportUpdateWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => ReportUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: ReportUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: ReportCreateWithoutCommentsInput;
}
