import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyCreatorInputEnvelope } from "../inputs/PostCommentCreateManyCreatorInputEnvelope";
import { PostCommentCreateOrConnectWithoutCreatorInput } from "../inputs/PostCommentCreateOrConnectWithoutCreatorInput";
import { PostCommentCreateWithoutCreatorInput } from "../inputs/PostCommentCreateWithoutCreatorInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput[] | undefined;
}
