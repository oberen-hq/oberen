import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelScalarWhereInput } from "../inputs/LabelScalarWhereInput";
import { LabelUpdateManyMutationInput } from "../inputs/LabelUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelUpdateManyWithWhereWithoutProfileInput {
  @TypeGraphQL.Field(_type => LabelScalarWhereInput, {
    nullable: false
  })
  where!: LabelScalarWhereInput;

  @TypeGraphQL.Field(_type => LabelUpdateManyMutationInput, {
    nullable: false
  })
  data!: LabelUpdateManyMutationInput;
}
