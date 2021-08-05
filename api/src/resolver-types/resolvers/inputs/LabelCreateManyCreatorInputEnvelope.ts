import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateManyCreatorInput } from "../inputs/LabelCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [LabelCreateManyCreatorInput], {
    nullable: false
  })
  data!: LabelCreateManyCreatorInput[];
}
