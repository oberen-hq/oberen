import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyCreatorInput } from "../inputs/PostCommentCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCommentCreateManyCreatorInput], {
    nullable: false
  })
  data!: PostCommentCreateManyCreatorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
