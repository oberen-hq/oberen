import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutLikersInput } from "../inputs/CommentCreateOrConnectWithoutLikersInput";
import { CommentCreateWithoutLikersInput } from "../inputs/CommentCreateWithoutLikersInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedManyWithoutLikersInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutLikersInput], {
    nullable: true
  })
  create?: CommentCreateWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutLikersInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
