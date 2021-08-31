import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutCreatorInput } from "../inputs/PostCommentCreateWithoutCreatorInput";
import { PostCommentUpdateWithoutCreatorInput } from "../inputs/PostCommentUpdateWithoutCreatorInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: PostCommentUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutCreatorInput;
}
