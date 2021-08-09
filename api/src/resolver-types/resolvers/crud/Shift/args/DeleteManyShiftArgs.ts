import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftWhereInput } from "../../../inputs/ShiftWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShiftArgs {
  @TypeGraphQL.Field(_type => ShiftWhereInput, {
    nullable: true
  })
  where?: ShiftWhereInput | undefined;
}
