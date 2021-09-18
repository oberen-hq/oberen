// IMPORTS

import { InputType, Field } from "type-graphql";

// CODE

@InputType()
export default class FindHashtagByIdArgs {
  @Field(() => String)
  hashtagId: string;
}
