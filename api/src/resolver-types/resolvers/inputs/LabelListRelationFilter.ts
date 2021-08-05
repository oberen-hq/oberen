import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelWhereInput } from "../inputs/LabelWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelListRelationFilter {
  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  every?: LabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  some?: LabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  none?: LabelWhereInput | undefined;
}
