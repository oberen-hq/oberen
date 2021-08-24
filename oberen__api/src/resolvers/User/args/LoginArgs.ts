import { InputType, Field } from "type-graphql";

@InputType()
export default class LoginArgs {
  @Field()
  email: string;
  @Field()
  password: string;
}
