import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateManyProfileInput } from "../inputs/LabelCreateManyProfileInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelCreateManyProfileInputEnvelope {
  @TypeGraphQL.Field(_type => [LabelCreateManyProfileInput], {
    nullable: false
  })
  data!: LabelCreateManyProfileInput[];
}
