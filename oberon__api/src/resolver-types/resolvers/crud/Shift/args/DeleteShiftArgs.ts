import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftWhereUniqueInput } from "../../../inputs/ShiftWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteShiftArgs {
  @TypeGraphQL.Field(_type => ShiftWhereUniqueInput, {
    nullable: false
  })
  where!: ShiftWhereUniqueInput;
}
