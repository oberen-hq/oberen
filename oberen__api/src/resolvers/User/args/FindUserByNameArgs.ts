// IMPORTS

import { Field, InputType } from "type-graphql";

// CODE

@InputType()
export default class FindUserByNameArgs {
  @Field({ nullable: false })
  username: string;
}
