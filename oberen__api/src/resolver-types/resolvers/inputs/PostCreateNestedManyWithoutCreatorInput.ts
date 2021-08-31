import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCreatorInputEnvelope } from "../inputs/PostCreateManyCreatorInputEnvelope";
import { PostCreateOrConnectWithoutCreatorInput } from "../inputs/PostCreateOrConnectWithoutCreatorInput";
import { PostCreateWithoutCreatorInput } from "../inputs/PostCreateWithoutCreatorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: PostCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
