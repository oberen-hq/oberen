import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateNestedManyWithoutCreatorInput } from "../inputs/PostCommentCreateNestedManyWithoutCreatorInput";
import { PostCommentCreateNestedManyWithoutLikersInput } from "../inputs/PostCommentCreateNestedManyWithoutLikersInput";
import { PostCreateNestedManyWithoutUserInput } from "../inputs/PostCreateNestedManyWithoutUserInput";
import { PostCreateNestedOneWithoutLikersInput } from "../inputs/PostCreateNestedOneWithoutLikersInput";
import { UserProfileCreateNestedOneWithoutUserInput } from "../inputs/UserProfileCreateNestedOneWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutPostsInput {
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
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  userRole?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  likedPosts?: PostCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedManyWithoutLikersInput, {
    nullable: true
  })
  likedComments?: PostCommentCreateNestedManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  PostComment?: PostCommentCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutLikersInput, {
    nullable: true
  })
  Post?: PostCreateNestedOneWithoutLikersInput | undefined;
}
