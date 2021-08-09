import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftUpdateInput } from "../../../inputs/ShiftUpdateInput";
import { ShiftWhereUniqueInput } from "../../../inputs/ShiftWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShiftArgs {
  @TypeGraphQL.Field(_type => ShiftUpdateInput, {
    nullable: false
  })
  data!: ShiftUpdateInput;

  @TypeGraphQL.Field(_type => ShiftWhereUniqueInput, {
    nullable: false
  })
  where!: ShiftWhereUniqueInput;
}
