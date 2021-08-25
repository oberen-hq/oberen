import { Field, InputType } from "type-graphql";

@InputType()
export default class FindPostByIdArgs {
  @Field({ nullable: false })
  postId: string;
}
