import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportOrderByInput } from "../../../inputs/ReportOrderByInput";
import { ReportScalarWhereWithAggregatesInput } from "../../../inputs/ReportScalarWhereWithAggregatesInput";
import { ReportWhereInput } from "../../../inputs/ReportWhereInput";
import { ReportScalarFieldEnum } from "../../../../enums/ReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReportArgs {
  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  where?: ReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReportOrderByInput], {
    nullable: true
  })
  orderBy?: ReportOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name" | "description" | "severity" | "type" | "creatorId" | "status">;

  @TypeGraphQL.Field(_type => ReportScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReportScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
