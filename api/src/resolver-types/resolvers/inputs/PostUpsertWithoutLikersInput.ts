import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLikersInput } from "../inputs/PostCreateWithoutLikersInput";
import { PostUpdateWithoutLikersInput } from "../inputs/PostUpdateWithoutLikersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutLikersInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutLikersInput, {
    nullable: false
  })
  update!: PostUpdateWithoutLikersInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutLikersInput, {
    nullable: false
  })
  create!: PostCreateWithoutLikersInput;
}
