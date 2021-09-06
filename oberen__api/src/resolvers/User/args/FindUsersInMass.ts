// IMPORTS

import { Field, InputType } from "type-graphql";

// CODE

@InputType()
export default class FindUsersInMassArgs {
  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  skip?: number;
}
