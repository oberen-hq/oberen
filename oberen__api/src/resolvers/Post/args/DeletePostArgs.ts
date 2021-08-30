import { Field, InputType } from "type-graphql";

@InputType()
export default class DeletePostArgs {
  @Field(() => String, { nullable: false })
  postId: string;
}
