import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLikersInput } from "../inputs/PostCreateOrConnectWithoutLikersInput";
import { PostCreateWithoutLikersInput } from "../inputs/PostCreateWithoutLikersInput";
import { PostUpdateWithoutLikersInput } from "../inputs/PostUpdateWithoutLikersInput";
import { PostUpsertWithoutLikersInput } from "../inputs/PostUpsertWithoutLikersInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateOneWithoutLikersInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutLikersInput, {
    nullable: true
  })
  create?: PostCreateWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutLikersInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutLikersInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutLikersInput, {
    nullable: true
  })
  update?: PostUpdateWithoutLikersInput | undefined;
}
