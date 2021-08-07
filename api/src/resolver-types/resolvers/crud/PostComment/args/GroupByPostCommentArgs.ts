import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentOrderByInput } from "../../../inputs/PostCommentOrderByInput";
import { PostCommentScalarWhereWithAggregatesInput } from "../../../inputs/PostCommentScalarWhereWithAggregatesInput";
import { PostCommentWhereInput } from "../../../inputs/PostCommentWhereInput";
import { PostCommentScalarFieldEnum } from "../../../../enums/PostCommentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostCommentArgs {
  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostCommentOrderByInput], {
    nullable: true
  })
  orderBy?: PostCommentOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "body" | "creatorId" | "postId" | "edited" | "likes">;

  @TypeGraphQL.Field(_type => PostCommentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostCommentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
