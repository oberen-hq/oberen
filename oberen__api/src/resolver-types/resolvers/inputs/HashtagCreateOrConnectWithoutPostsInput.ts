import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateWithoutPostsInput } from "../inputs/HashtagCreateWithoutPostsInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagCreateWithoutPostsInput, {
    nullable: false
  })
  create!: HashtagCreateWithoutPostsInput;
}
