import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutHashtagsInput } from "../inputs/PostCreateOrConnectWithoutHashtagsInput";
import { PostCreateWithoutHashtagsInput } from "../inputs/PostCreateWithoutHashtagsInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutHashtagsInput } from "../inputs/PostUpdateManyWithWhereWithoutHashtagsInput";
import { PostUpdateWithWhereUniqueWithoutHashtagsInput } from "../inputs/PostUpdateWithWhereUniqueWithoutHashtagsInput";
import { PostUpsertWithWhereUniqueWithoutHashtagsInput } from "../inputs/PostUpsertWithWhereUniqueWithoutHashtagsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutHashtagsInput], {
    nullable: true
  })
  create?: PostCreateWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutHashtagsInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutHashtagsInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutHashtagsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutHashtagsInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutHashtagsInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
