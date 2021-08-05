import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutLikersInput } from "../inputs/PostCommentCreateWithoutLikersInput";
import { PostCommentUpdateWithoutLikersInput } from "../inputs/PostCommentUpdateWithoutLikersInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpsertWithWhereUniqueWithoutLikersInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutLikersInput, {
    nullable: false
  })
  update!: PostCommentUpdateWithoutLikersInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutLikersInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutLikersInput;
}
