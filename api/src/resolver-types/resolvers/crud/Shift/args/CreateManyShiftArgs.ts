import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftCreateManyInput } from "../../../inputs/ShiftCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShiftArgs {
  @TypeGraphQL.Field(_type => [ShiftCreateManyInput], {
    nullable: false
  })
  data!: ShiftCreateManyInput[];
}
