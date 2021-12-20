import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateNestedManyWithoutPostInput } from "../inputs/AttachmentCreateNestedManyWithoutPostInput";
import { HashtagCreateNestedManyWithoutPostsInput } from "../inputs/HashtagCreateNestedManyWithoutPostsInput";
import { LabelCreateNestedManyWithoutPostsInput } from "../inputs/LabelCreateNestedManyWithoutPostsInput";
import { UserCreateNestedManyWithoutLikedPostsInput } from "../inputs/UserCreateNestedManyWithoutLikedPostsInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateWithoutCommentsInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  public?: boolean | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  likes?: bigint | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedPostsInput, {
    nullable: true
  })
  likers?: UserCreateNestedManyWithoutLikedPostsInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  attachments?: AttachmentCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => HashtagCreateNestedManyWithoutPostsInput, {
    nullable: true
  })
  hashtags?: HashtagCreateNestedManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LabelCreateNestedManyWithoutPostsInput, {
    nullable: true
  })
  labels?: LabelCreateNestedManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  creator!: UserCreateNestedOneWithoutPostsInput;
}
