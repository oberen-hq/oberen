import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateNestedManyWithoutPostInput } from "../inputs/PostCommentCreateNestedManyWithoutPostInput";
import { UserCreateNestedManyWithoutLikedPostsInput } from "../inputs/UserCreateNestedManyWithoutLikedPostsInput";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateWithoutCreatorInput {
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
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => PostType, {
    nullable: false
  })
  type!: "post" | "job" | "organization" | "shift" | "article" | "feedback" | "poll";

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedPostsInput, {
    nullable: true
  })
  likers?: UserCreateNestedManyWithoutLikedPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  comments?: PostCommentCreateNestedManyWithoutPostInput | undefined;
}
