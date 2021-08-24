import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCreatorInputEnvelope } from "../inputs/PostCreateManyCreatorInputEnvelope";
import { PostCreateOrConnectWithoutCreatorInput } from "../inputs/PostCreateOrConnectWithoutCreatorInput";
import { PostCreateWithoutCreatorInput } from "../inputs/PostCreateWithoutCreatorInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutCreatorInput } from "../inputs/PostUpdateManyWithWhereWithoutCreatorInput";
import { PostUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/PostUpdateWithWhereUniqueWithoutCreatorInput";
import { PostUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/PostUpsertWithWhereUniqueWithoutCreatorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: PostCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCreatorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
