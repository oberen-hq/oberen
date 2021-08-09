import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportStatus } from "../../enums/ReportStatus";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumReportStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ReportStatus, {
    nullable: true
  })
  set?: "pending" | "recieved" | "rejected" | "accepted" | undefined;
}
