import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLikersInput } from "../inputs/PostCreateWithoutLikersInput";
import { PostUpdateWithoutLikersInput } from "../inputs/PostUpdateWithoutLikersInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutLikersInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutLikersInput, {
    nullable: false
  })
  update!: PostUpdateWithoutLikersInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutLikersInput, {
    nullable: false
  })
  create!: PostCreateWithoutLikersInput;
}
