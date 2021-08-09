import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportStatus } from "../../enums/ReportStatus";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumReportStatusFilter {
  @TypeGraphQL.Field(_type => ReportStatus, {
    nullable: true
  })
  equals?: "pending" | "recieved" | "rejected" | "accepted" | undefined;

  @TypeGraphQL.Field(_type => [ReportStatus], {
    nullable: true
  })
  in?: Array<"pending" | "recieved" | "rejected" | "accepted"> | undefined;

  @TypeGraphQL.Field(_type => [ReportStatus], {
    nullable: true
  })
  notIn?: Array<"pending" | "recieved" | "rejected" | "accepted"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportStatusFilter, {
    nullable: true
  })
  not?: NestedEnumReportStatusFilter | undefined;
}
