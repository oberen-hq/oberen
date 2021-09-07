// IMPORTS

import { Field, InputType } from "type-graphql";

// CODE

@InputType()
export default class LikeUnlikePostArgs {
  @Field(() => String)
  postId: string;
}
