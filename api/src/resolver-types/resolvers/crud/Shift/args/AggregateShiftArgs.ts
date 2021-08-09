import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftOrderByInput } from "../../../inputs/ShiftOrderByInput";
import { ShiftWhereInput } from "../../../inputs/ShiftWhereInput";
import { ShiftWhereUniqueInput } from "../../../inputs/ShiftWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShiftArgs {
  @TypeGraphQL.Field(_type => ShiftWhereInput, {
    nullable: true
  })
  where?: ShiftWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShiftOrderByInput], {
    nullable: true
  })
  orderBy?: ShiftOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ShiftWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShiftWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
