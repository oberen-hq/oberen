import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelUpdateWithoutPostsInput } from "../inputs/LabelUpdateWithoutPostsInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelUpdateWithWhereUniqueWithoutPostsInput {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false
  })
  where!: LabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => LabelUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: LabelUpdateWithoutPostsInput;
}
