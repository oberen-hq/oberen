import { InputType, Field } from "type-graphql";

// User inputs

@InputType()
class UpdateUserInput {
  @Field({ nullable: false })
  username: string;
}

@InputType()
class RegisterUserInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field(() => [String])
  roles!: string[];
}

@InputType()
class LoginUserInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

// Post inputs

@InputType()
class PostInput {
  @Field()
  title!: string;
  @Field()
  text!: string;
}

export { UpdateUserInput, RegisterUserInput, LoginUserInput, PostInput };
