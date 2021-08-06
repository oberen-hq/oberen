import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyPostInput } from "../inputs/PostCommentCreateManyPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCommentCreateManyPostInput], {
    nullable: false
  })
  data!: PostCommentCreateManyPostInput[];
}
