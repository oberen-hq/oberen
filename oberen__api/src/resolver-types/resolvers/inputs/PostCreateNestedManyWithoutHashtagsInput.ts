import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutHashtagsInput } from "../inputs/PostCreateOrConnectWithoutHashtagsInput";
import { PostCreateWithoutHashtagsInput } from "../inputs/PostCreateWithoutHashtagsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutHashtagsInput], {
    nullable: true
  })
  create?: PostCreateWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutHashtagsInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
