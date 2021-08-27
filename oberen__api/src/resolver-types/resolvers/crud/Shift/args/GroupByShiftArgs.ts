import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftOrderByInput } from "../../../inputs/ShiftOrderByInput";
import { ShiftScalarWhereWithAggregatesInput } from "../../../inputs/ShiftScalarWhereWithAggregatesInput";
import { ShiftWhereInput } from "../../../inputs/ShiftWhereInput";
import { ShiftScalarFieldEnum } from "../../../../enums/ShiftScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShiftArgs {
  @TypeGraphQL.Field(_type => ShiftWhereInput, {
    nullable: true
  })
  where?: ShiftWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShiftOrderByInput], {
    nullable: true
  })
  orderBy?: ShiftOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShiftScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ShiftScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShiftScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
