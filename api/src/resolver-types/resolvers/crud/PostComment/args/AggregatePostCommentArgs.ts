import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentOrderByInput } from "../../../inputs/PostCommentOrderByInput";
import { PostCommentWhereInput } from "../../../inputs/PostCommentWhereInput";
import { PostCommentWhereUniqueInput } from "../../../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePostCommentArgs {
  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostCommentOrderByInput], {
    nullable: true
  })
  orderBy?: PostCommentOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostCommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
