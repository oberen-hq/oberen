import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutAttachmentsInput } from "../inputs/PostCreateWithoutAttachmentsInput";
import { PostUpdateWithoutAttachmentsInput } from "../inputs/PostUpdateWithoutAttachmentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutAttachmentsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutAttachmentsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutAttachmentsInput, {
    nullable: false
  })
  create!: PostCreateWithoutAttachmentsInput;
}
