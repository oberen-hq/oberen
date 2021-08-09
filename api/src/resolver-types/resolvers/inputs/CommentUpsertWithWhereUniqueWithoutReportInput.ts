import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutReportInput } from "../inputs/CommentCreateWithoutReportInput";
import { CommentUpdateWithoutReportInput } from "../inputs/CommentUpdateWithoutReportInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutReportInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutReportInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutReportInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutReportInput, {
    nullable: false
  })
  create!: CommentCreateWithoutReportInput;
}
