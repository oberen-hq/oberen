import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyCreatorInputEnvelope } from "../inputs/CommentCreateManyCreatorInputEnvelope";
import { CommentCreateOrConnectWithoutCreatorInput } from "../inputs/CommentCreateOrConnectWithoutCreatorInput";
import { CommentCreateWithoutCreatorInput } from "../inputs/CommentCreateWithoutCreatorInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutCreatorInput } from "../inputs/CommentUpdateManyWithWhereWithoutCreatorInput";
import { CommentUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutCreatorInput";
import { CommentUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutCreatorInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: CommentCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyCreatorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
