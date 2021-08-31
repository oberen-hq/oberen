import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyCreatorInputEnvelope } from "../inputs/PostCommentCreateManyCreatorInputEnvelope";
import { PostCommentCreateOrConnectWithoutCreatorInput } from "../inputs/PostCommentCreateOrConnectWithoutCreatorInput";
import { PostCommentCreateWithoutCreatorInput } from "../inputs/PostCommentCreateWithoutCreatorInput";
import { PostCommentScalarWhereInput } from "../inputs/PostCommentScalarWhereInput";
import { PostCommentUpdateManyWithWhereWithoutCreatorInput } from "../inputs/PostCommentUpdateManyWithWhereWithoutCreatorInput";
import { PostCommentUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/PostCommentUpdateWithWhereUniqueWithoutCreatorInput";
import { PostCommentUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/PostCommentUpsertWithWhereUniqueWithoutCreatorInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: PostCommentUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyCreatorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostCommentUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: PostCommentUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: PostCommentUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostCommentScalarWhereInput[] | undefined;
}
