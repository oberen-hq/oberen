import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateWithoutCreatorInput } from "../inputs/LabelCreateWithoutCreatorInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelCreateOrConnectWithoutCreatorInput {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false
  })
  where!: LabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => LabelCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: LabelCreateWithoutCreatorInput;
}
