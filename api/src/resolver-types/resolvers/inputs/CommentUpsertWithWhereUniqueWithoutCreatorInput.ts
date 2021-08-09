import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutCreatorInput } from "../inputs/CommentCreateWithoutCreatorInput";
import { CommentUpdateWithoutCreatorInput } from "../inputs/CommentUpdateWithoutCreatorInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: CommentCreateWithoutCreatorInput;
}
