import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftCreateInput } from "../../../inputs/ShiftCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShiftArgs {
  @TypeGraphQL.Field(_type => ShiftCreateInput, {
    nullable: false
  })
  data!: ShiftCreateInput;
}
