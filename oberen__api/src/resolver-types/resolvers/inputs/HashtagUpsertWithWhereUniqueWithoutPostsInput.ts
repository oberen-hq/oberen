import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateWithoutPostsInput } from "../inputs/HashtagCreateWithoutPostsInput";
import { HashtagUpdateWithoutPostsInput } from "../inputs/HashtagUpdateWithoutPostsInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagUpsertWithWhereUniqueWithoutPostsInput {
  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: HashtagUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => HashtagCreateWithoutPostsInput, {
    nullable: false
  })
  create!: HashtagCreateWithoutPostsInput;
}
