import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutPostInput } from "../inputs/PostCommentCreateWithoutPostInput";
import { PostCommentUpdateWithoutPostInput } from "../inputs/PostCommentUpdateWithoutPostInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutPostInput, {
    nullable: false
  })
  update!: PostCommentUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutPostInput;
}
