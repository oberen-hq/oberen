import { Field, InputType } from "type-graphql";

@InputType()
export default class FindPostsInMassArgs {
  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  skip?: number;
}
