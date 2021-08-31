import { Field, InputType } from "type-graphql";

@InputType()
export default class FindUserByNameArgs {
  @Field({ nullable: false })
  username: string;
}
