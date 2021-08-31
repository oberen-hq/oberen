import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLabelsInput } from "../inputs/PostCreateWithoutLabelsInput";
import { PostUpdateWithoutLabelsInput } from "../inputs/PostUpdateWithoutLabelsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutLabelsInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutLabelsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutLabelsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutLabelsInput, {
    nullable: false
  })
  create!: PostCreateWithoutLabelsInput;
}
