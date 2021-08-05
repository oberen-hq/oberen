import { Length } from "class-validator";
import { InputType, Field } from "type-graphql";

type ProfileType = {
  avatarUrl?: string;
  bio?: string;
};

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
  @Field()
  avatarUrl?: string;
  @Length(5, 1000)
  @Field()
  bio?: string;
}
