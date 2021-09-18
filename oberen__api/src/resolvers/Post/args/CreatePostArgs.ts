// IMPORTS

import { Length } from "class-validator";
import { PostType } from "../../../resolver-types/enums";
import { InputType, Field } from "type-graphql";

// CODE

@InputType()
export default class CreatePostArgs {
  @Field(() => String)
  @Length(3, 50)
  title: string;
  @Field({ nullable: true })
  description?: string;
  @Field(() => PostType)
  type: PostType;
  @Field(() => [String], { nullable: true })
  attachmentIds?: string[];
  @Field(() => [String], { nullable: true })
  hashtagIds?: string[];
  @Field(() => [String], { nullable: true })
  labelIds?: string[];
}
