import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutLikersInput } from "../inputs/CommentCreateOrConnectWithoutLikersInput";
import { CommentCreateWithoutLikersInput } from "../inputs/CommentCreateWithoutLikersInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutLikersInput } from "../inputs/CommentUpdateManyWithWhereWithoutLikersInput";
import { CommentUpdateWithWhereUniqueWithoutLikersInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutLikersInput";
import { CommentUpsertWithWhereUniqueWithoutLikersInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutLikersInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateManyWithoutLikersInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutLikersInput], {
    nullable: true
  })
  create?: CommentCreateWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutLikersInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutLikersInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutLikersInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutLikersInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
