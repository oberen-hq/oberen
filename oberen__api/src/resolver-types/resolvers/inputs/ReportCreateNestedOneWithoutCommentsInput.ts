import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateOrConnectWithoutCommentsInput } from "../inputs/ReportCreateOrConnectWithoutCommentsInput";
import { ReportCreateWithoutCommentsInput } from "../inputs/ReportCreateWithoutCommentsInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReportCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => ReportCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: ReportCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  connect?: ReportWhereUniqueInput | undefined;
}
