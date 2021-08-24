import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLikersInput } from "../inputs/PostCreateOrConnectWithoutLikersInput";
import { PostCreateWithoutLikersInput } from "../inputs/PostCreateWithoutLikersInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutLikersInput } from "../inputs/PostUpdateManyWithWhereWithoutLikersInput";
import { PostUpdateWithWhereUniqueWithoutLikersInput } from "../inputs/PostUpdateWithWhereUniqueWithoutLikersInput";
import { PostUpsertWithWhereUniqueWithoutLikersInput } from "../inputs/PostUpsertWithWhereUniqueWithoutLikersInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutLikersInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutLikersInput], {
    nullable: true
  })
  create?: PostCreateWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLikersInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutLikersInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutLikersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutLikersInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutLikersInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
