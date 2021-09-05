import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutErrorsInput } from "../inputs/UserCreateNestedOneWithoutErrorsInput";
import { ErrorType } from "../../enums/ErrorType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ErrorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ErrorType, {
    nullable: false
  })
  type!: "internal" | "authentication" | "timeout" | "unavailable";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  route?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutErrorsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutErrorsInput;
}
