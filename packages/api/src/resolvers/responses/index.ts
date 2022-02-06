import { ObjectType, Field } from "type-graphql";
import { User, Post } from "../../entities";

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

// User Responses

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  message?: string;
}

// Post Responses

@ObjectType()
class PostResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Post, { nullable: true })
  post?: Post;

  @Field(() => String, { nullable: true })
  message?: string;
}

export { UserResponse, PostResponse };
