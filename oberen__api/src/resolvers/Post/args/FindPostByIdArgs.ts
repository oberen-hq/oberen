// IMPORTS

import { Field, InputType } from "type-graphql";

// CODE

@InputType()
export default class FindPostByIdArgs {
  @Field({ nullable: false })
  postId: string;
}
