import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutLikersInput } from "../inputs/CommentCreateWithoutLikersInput";
import { CommentUpdateWithoutLikersInput } from "../inputs/CommentUpdateWithoutLikersInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutLikersInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutLikersInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutLikersInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutLikersInput, {
    nullable: false
  })
  create!: CommentCreateWithoutLikersInput;
}
