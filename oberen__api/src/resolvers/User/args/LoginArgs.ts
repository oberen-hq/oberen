// IMPORTS

import { InputType, Field } from "type-graphql";

// CODE

@InputType()
export default class LoginArgs {
  @Field()
  email: string;
  @Field()
  password: string;
}
