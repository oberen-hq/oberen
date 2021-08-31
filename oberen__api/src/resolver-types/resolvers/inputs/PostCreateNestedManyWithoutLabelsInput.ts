import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLabelsInput } from "../inputs/PostCreateOrConnectWithoutLabelsInput";
import { PostCreateWithoutLabelsInput } from "../inputs/PostCreateWithoutLabelsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutLabelsInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutLabelsInput], {
    nullable: true
  })
  create?: PostCreateWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLabelsInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
