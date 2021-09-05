import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorWhereInput } from "../inputs/ErrorWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorListRelationFilter {
  @TypeGraphQL.Field(_type => ErrorWhereInput, {
    nullable: true
  })
  every?: ErrorWhereInput | undefined;

  @TypeGraphQL.Field(_type => ErrorWhereInput, {
    nullable: true
  })
  some?: ErrorWhereInput | undefined;

  @TypeGraphQL.Field(_type => ErrorWhereInput, {
    nullable: true
  })
  none?: ErrorWhereInput | undefined;
}
