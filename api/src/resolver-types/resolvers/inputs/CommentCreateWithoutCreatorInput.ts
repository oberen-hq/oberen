import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { ReportCreateNestedOneWithoutCommentsInput } from "../inputs/ReportCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedManyWithoutLikedCommentsInput } from "../inputs/UserCreateNestedManyWithoutLikedCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateWithoutCreatorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  edited?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  likes?: number | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => ReportCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  report!: ReportCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedCommentsInput, {
    nullable: true
  })
  likers?: UserCreateNestedManyWithoutLikedCommentsInput | undefined;
}