// IMPORTS

import { Field, InputType } from "type-graphql";

// CODE

@InputType()
export default class DeletePostArgs {
  @Field(() => String, { nullable: false })
  postId: string;
}
