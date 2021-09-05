import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ErrorCreateManyUserInput } from "../inputs/ErrorCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ErrorCreateManyUserInput], {
    nullable: false
  })
  data!: ErrorCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
