import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportScalarWhereInput } from "../inputs/ReportScalarWhereInput";
import { ReportUpdateManyMutationInput } from "../inputs/ReportUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportUpdateManyWithWhereWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ReportScalarWhereInput, {
    nullable: false
  })
  where!: ReportScalarWhereInput;

  @TypeGraphQL.Field(_type => ReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReportUpdateManyMutationInput;
}
