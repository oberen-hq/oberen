import { Post, User } from "../../../resolver-types/models";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class PostResponse {
  @Field(() => Post)
  post: Post;
}
