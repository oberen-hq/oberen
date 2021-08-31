import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateOrConnectWithoutPostsInput } from "../inputs/LabelCreateOrConnectWithoutPostsInput";
import { LabelCreateWithoutPostsInput } from "../inputs/LabelCreateWithoutPostsInput";
import { LabelScalarWhereInput } from "../inputs/LabelScalarWhereInput";
import { LabelUpdateManyWithWhereWithoutPostsInput } from "../inputs/LabelUpdateManyWithWhereWithoutPostsInput";
import { LabelUpdateWithWhereUniqueWithoutPostsInput } from "../inputs/LabelUpdateWithWhereUniqueWithoutPostsInput";
import { LabelUpsertWithWhereUniqueWithoutPostsInput } from "../inputs/LabelUpsertWithWhereUniqueWithoutPostsInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelUpdateManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [LabelCreateWithoutPostsInput], {
    nullable: true
  })
  create?: LabelCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: LabelCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpsertWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  upsert?: LabelUpsertWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  connect?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  set?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  delete?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpdateWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  update?: LabelUpdateWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpdateManyWithWhereWithoutPostsInput], {
    nullable: true
  })
  updateMany?: LabelUpdateManyWithWhereWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LabelScalarWhereInput[] | undefined;
}
