import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyCreatorInput } from "../inputs/CommentCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyCreatorInput], {
    nullable: false
  })
  data!: CommentCreateManyCreatorInput[];
}
