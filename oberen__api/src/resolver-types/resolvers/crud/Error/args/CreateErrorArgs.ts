import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ErrorCreateInput } from "../../../inputs/ErrorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateErrorArgs {
  @TypeGraphQL.Field(_type => ErrorCreateInput, {
    nullable: false
  })
  data!: ErrorCreateInput;
}
