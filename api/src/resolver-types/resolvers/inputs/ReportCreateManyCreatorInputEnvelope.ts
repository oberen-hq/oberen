import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateManyCreatorInput } from "../inputs/ReportCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [ReportCreateManyCreatorInput], {
    nullable: false
  })
  data!: ReportCreateManyCreatorInput[];
}
