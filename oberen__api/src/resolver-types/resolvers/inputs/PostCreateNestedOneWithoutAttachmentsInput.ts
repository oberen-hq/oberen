import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutAttachmentsInput } from "../inputs/PostCreateOrConnectWithoutAttachmentsInput";
import { PostCreateWithoutAttachmentsInput } from "../inputs/PostCreateWithoutAttachmentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedOneWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutAttachmentsInput, {
    nullable: true
  })
  create?: PostCreateWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutAttachmentsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
