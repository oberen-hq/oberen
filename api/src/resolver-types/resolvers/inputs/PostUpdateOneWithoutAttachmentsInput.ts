import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutAttachmentsInput } from "../inputs/PostCreateOrConnectWithoutAttachmentsInput";
import { PostCreateWithoutAttachmentsInput } from "../inputs/PostCreateWithoutAttachmentsInput";
import { PostUpdateWithoutAttachmentsInput } from "../inputs/PostUpdateWithoutAttachmentsInput";
import { PostUpsertWithoutAttachmentsInput } from "../inputs/PostUpsertWithoutAttachmentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateOneWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutAttachmentsInput, {
    nullable: true
  })
  create?: PostCreateWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutAttachmentsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutAttachmentsInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutAttachmentsInput, {
    nullable: true
  })
  update?: PostUpdateWithoutAttachmentsInput | undefined;
}
