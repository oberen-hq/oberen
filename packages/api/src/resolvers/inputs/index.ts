import { InputType, Field } from "type-graphql";

// User inputs

@InputType()
class UpdateUserInput {
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field(() => [String], { nullable: true })
  roles?: string[];
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
