import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftUpdateManyMutationInput } from "../../../inputs/ShiftUpdateManyMutationInput";
import { ShiftWhereInput } from "../../../inputs/ShiftWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShiftArgs {
  @TypeGraphQL.Field(_type => ShiftUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShiftUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShiftWhereInput, {
    nullable: true
  })
  where?: ShiftWhereInput | undefined;
}
