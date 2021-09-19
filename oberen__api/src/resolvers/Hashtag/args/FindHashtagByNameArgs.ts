// IMPORTS

import { InputType, Field } from "type-graphql";

// CODE

@InputType()
export default class FindHashtagByNameArgs {
  @Field(() => String)
  hashtagName: string;
}
