import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateOrConnectWithoutPostsInput } from "../inputs/HashtagCreateOrConnectWithoutPostsInput";
import { HashtagCreateWithoutPostsInput } from "../inputs/HashtagCreateWithoutPostsInput";
import { HashtagScalarWhereInput } from "../inputs/HashtagScalarWhereInput";
import { HashtagUpdateManyWithWhereWithoutPostsInput } from "../inputs/HashtagUpdateManyWithWhereWithoutPostsInput";
import { HashtagUpdateWithWhereUniqueWithoutPostsInput } from "../inputs/HashtagUpdateWithWhereUniqueWithoutPostsInput";
import { HashtagUpsertWithWhereUniqueWithoutPostsInput } from "../inputs/HashtagUpsertWithWhereUniqueWithoutPostsInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagUpdateManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [HashtagCreateWithoutPostsInput], {
    nullable: true
  })
  create?: HashtagCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagUpsertWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  upsert?: HashtagUpsertWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  connect?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  set?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  delete?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagUpdateWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  update?: HashtagUpdateWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagUpdateManyWithWhereWithoutPostsInput], {
    nullable: true
  })
  updateMany?: HashtagUpdateManyWithWhereWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: HashtagScalarWhereInput[] | undefined;
}
