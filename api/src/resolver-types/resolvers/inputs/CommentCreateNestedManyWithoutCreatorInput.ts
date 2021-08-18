import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyCreatorInputEnvelope } from "../inputs/CommentCreateManyCreatorInputEnvelope";
import { CommentCreateOrConnectWithoutCreatorInput } from "../inputs/CommentCreateOrConnectWithoutCreatorInput";
import { CommentCreateWithoutCreatorInput } from "../inputs/CommentCreateWithoutCreatorInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: CommentCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}