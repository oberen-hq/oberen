import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLabelsInput } from "../inputs/PostCreateOrConnectWithoutLabelsInput";
import { PostCreateWithoutLabelsInput } from "../inputs/PostCreateWithoutLabelsInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutLabelsInput } from "../inputs/PostUpdateManyWithWhereWithoutLabelsInput";
import { PostUpdateWithWhereUniqueWithoutLabelsInput } from "../inputs/PostUpdateWithWhereUniqueWithoutLabelsInput";
import { PostUpsertWithWhereUniqueWithoutLabelsInput } from "../inputs/PostUpsertWithWhereUniqueWithoutLabelsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutLabelsInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutLabelsInput], {
    nullable: true
  })
  create?: PostCreateWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLabelsInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutLabelsInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutLabelsInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutLabelsInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
