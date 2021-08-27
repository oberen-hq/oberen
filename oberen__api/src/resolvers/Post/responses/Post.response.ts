import {
  Post,
  User,
  Attachment,
  Comment,
} from "../../../resolver-types/models";
import { ObjectType, Field } from "type-graphql";
import { CommentScalarFieldEnum } from "src/resolver-types";

@ObjectType()
export class PostResponse {
  @Field(() => Post)
  post: Post;
  @Field(() => [Attachment])
  attachments: Attachment[];
}
