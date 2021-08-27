import { Length } from "class-validator";
import { PostType } from "../../../resolver-types/enums";
import { InputType, Field } from "type-graphql";

@InputType()
export default class CreatePostArgs {
  @Field()
  @Length(3, 50)
  title: string;
  @Field({ nullable: true })
  description?: string;
  @Field()
  type: PostType;
  @Field(() => [String], { nullable: true })
  attachmentIds?: string[];
  @Field(() => [String], { nullable: true })
  likerIds?: string[];
  @Field(() => [String], { nullable: true })
  commentIds?: string[];
}
