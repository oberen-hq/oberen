import { InputType, Field } from "type-graphql";

// User inputs

@InputType()
class RegisterUserInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
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

export { RegisterUserInput, LoginUserInput, PostInput };
