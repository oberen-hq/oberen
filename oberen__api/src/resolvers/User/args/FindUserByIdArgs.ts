// IMPORTS

import { Field, InputType } from "type-graphql";

// CODE

@InputType()
export default class FindUserByIdArgs {
  @Field({ nullable: false })
  id: string;
}
