import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCreatorInput } from "../inputs/PostCreateWithoutCreatorInput";
import { PostUpdateWithoutCreatorInput } from "../inputs/PostUpdateWithoutCreatorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: PostCreateWithoutCreatorInput;
}
