import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyReportInputEnvelope } from "../inputs/CommentCreateManyReportInputEnvelope";
import { CommentCreateOrConnectWithoutReportInput } from "../inputs/CommentCreateOrConnectWithoutReportInput";
import { CommentCreateWithoutReportInput } from "../inputs/CommentCreateWithoutReportInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedManyWithoutReportInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutReportInput], {
    nullable: true
  })
  create?: CommentCreateWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutReportInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutReportInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyReportInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyReportInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
