import { Length } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export default class RegisterArgs {
  @Length(5, 30)
  @Field()
  username: string;
  @Length(5, 100)
  @Field()
  email: string;
  @Length(8, 1024)
  @Field()
  password: string;
  @Field({ nullable: true })
  avatarUrl?: string;
  @Length(0, 1000)
  @Field({ nullable: true })
  bio?: string;
}
