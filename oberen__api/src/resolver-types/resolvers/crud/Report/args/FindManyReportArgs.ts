import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportOrderByInput } from "../../../inputs/ReportOrderByInput";
import { ReportWhereInput } from "../../../inputs/ReportWhereInput";
import { ReportWhereUniqueInput } from "../../../inputs/ReportWhereUniqueInput";
import { ReportScalarFieldEnum } from "../../../../enums/ReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyReportArgs {
  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  where?: ReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReportOrderByInput], {
    nullable: true
  })
  orderBy?: ReportOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "description" | "severity" | "type" | "creatorId" | "status"> | undefined;
}
