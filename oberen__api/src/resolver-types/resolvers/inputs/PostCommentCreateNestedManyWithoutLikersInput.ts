import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateOrConnectWithoutLikersInput } from "../inputs/PostCommentCreateOrConnectWithoutLikersInput";
import { PostCommentCreateWithoutLikersInput } from "../inputs/PostCommentCreateWithoutLikersInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentCreateNestedManyWithoutLikersInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutLikersInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutLikersInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput[] | undefined;
}
