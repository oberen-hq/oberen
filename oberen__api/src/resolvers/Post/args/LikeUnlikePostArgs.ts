import { Field, InputType } from "type-graphql";

@InputType()
export default class LikeUnlikePostArgs {
  @Field(() => String)
  postId: string;
}
