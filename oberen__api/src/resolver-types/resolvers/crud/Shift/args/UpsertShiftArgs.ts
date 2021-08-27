import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftCreateInput } from "../../../inputs/ShiftCreateInput";
import { ShiftUpdateInput } from "../../../inputs/ShiftUpdateInput";
import { ShiftWhereUniqueInput } from "../../../inputs/ShiftWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShiftArgs {
  @TypeGraphQL.Field(_type => ShiftWhereUniqueInput, {
    nullable: false
  })
  where!: ShiftWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShiftCreateInput, {
    nullable: false
  })
  create!: ShiftCreateInput;

  @TypeGraphQL.Field(_type => ShiftUpdateInput, {
    nullable: false
  })
  update!: ShiftUpdateInput;
}
