import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyReportInput } from "../inputs/CommentCreateManyReportInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateManyReportInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyReportInput], {
    nullable: false
  })
  data!: CommentCreateManyReportInput[];
}
