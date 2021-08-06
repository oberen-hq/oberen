import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLikersInput } from "../inputs/PostCreateOrConnectWithoutLikersInput";
import { PostCreateWithoutLikersInput } from "../inputs/PostCreateWithoutLikersInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutLikersInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutLikersInput], {
    nullable: true
  })
  create?: PostCreateWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLikersInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
