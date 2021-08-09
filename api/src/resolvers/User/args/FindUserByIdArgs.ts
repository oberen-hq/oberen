import { Field, InputType } from "type-graphql";

@InputType()
export default class FindUserByIdArgs {
  @Field({ nullable: false })
  id: string;
}
