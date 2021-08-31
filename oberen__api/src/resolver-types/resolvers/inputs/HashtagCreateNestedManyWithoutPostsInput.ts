import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateOrConnectWithoutPostsInput } from "../inputs/HashtagCreateOrConnectWithoutPostsInput";
import { HashtagCreateWithoutPostsInput } from "../inputs/HashtagCreateWithoutPostsInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagCreateNestedManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [HashtagCreateWithoutPostsInput], {
    nullable: true
  })
  create?: HashtagCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  connect?: HashtagWhereUniqueInput[] | undefined;
}
