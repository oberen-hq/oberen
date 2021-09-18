// IMPORTS

import { Length } from "class-validator";
import { InputType, Field } from "type-graphql";

// CODE

@InputType()
export default class CreateHashtagArgs {
   @Field(() => String)
   @Length(1, 25)
   name: string 
}