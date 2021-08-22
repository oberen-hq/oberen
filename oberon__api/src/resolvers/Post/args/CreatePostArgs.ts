import { Length } from "class-validator";
import { PostType } from "~/resolver-types/enums";
import { InputType, Field } from "type-graphql";
import { Attachment } from "~/resolver-types/models";

@InputType()
export default class CreatePostArgs {
  @Field()
  @Length(3, 50)
  title: string;
  @Field({ nullable: true })
  description?: string;
  @Field()
  type: PostType;
  @Field({ nullable: true })
  attachments?: Attachment[];
}
