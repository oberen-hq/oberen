import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateOrConnectWithoutAttachmentsInput } from "../inputs/ReportCreateOrConnectWithoutAttachmentsInput";
import { ReportCreateWithoutAttachmentsInput } from "../inputs/ReportCreateWithoutAttachmentsInput";
import { ReportUpdateWithoutAttachmentsInput } from "../inputs/ReportUpdateWithoutAttachmentsInput";
import { ReportUpsertWithoutAttachmentsInput } from "../inputs/ReportUpsertWithoutAttachmentsInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportUpdateOneWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => ReportCreateWithoutAttachmentsInput, {
    nullable: true
  })
  create?: ReportCreateWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateOrConnectWithoutAttachmentsInput, {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpsertWithoutAttachmentsInput, {
    nullable: true
  })
  upsert?: ReportUpsertWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  connect?: ReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ReportUpdateWithoutAttachmentsInput, {
    nullable: true
  })
  update?: ReportUpdateWithoutAttachmentsInput | undefined;
}
