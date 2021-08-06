import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateWithoutProfileInput } from "../inputs/LabelCreateWithoutProfileInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelCreateOrConnectWithoutProfileInput {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false
  })
  where!: LabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => LabelCreateWithoutProfileInput, {
    nullable: false
  })
  create!: LabelCreateWithoutProfileInput;
}
