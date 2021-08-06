import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateOrConnectWithoutLikersInput } from "../inputs/PostCommentCreateOrConnectWithoutLikersInput";
import { PostCommentCreateWithoutLikersInput } from "../inputs/PostCommentCreateWithoutLikersInput";
import { PostCommentScalarWhereInput } from "../inputs/PostCommentScalarWhereInput";
import { PostCommentUpdateManyWithWhereWithoutLikersInput } from "../inputs/PostCommentUpdateManyWithWhereWithoutLikersInput";
import { PostCommentUpdateWithWhereUniqueWithoutLikersInput } from "../inputs/PostCommentUpdateWithWhereUniqueWithoutLikersInput";
import { PostCommentUpsertWithWhereUniqueWithoutLikersInput } from "../inputs/PostCommentUpsertWithWhereUniqueWithoutLikersInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpdateManyWithoutLikersInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutLikersInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutLikersInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpsertWithWhereUniqueWithoutLikersInput], {
    nullable: true
  })
  upsert?: PostCommentUpsertWithWhereUniqueWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  set?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  delete?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpdateWithWhereUniqueWithoutLikersInput], {
    nullable: true
  })
  update?: PostCommentUpdateWithWhereUniqueWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpdateManyWithWhereWithoutLikersInput], {
    nullable: true
  })
  updateMany?: PostCommentUpdateManyWithWhereWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostCommentScalarWhereInput[] | undefined;
}
