// IMPORTS

import { PostType } from "../../../resolver-types/enums";
import { Field, InputType } from "type-graphql";

// CODE

@InputType()
export default class UpdatePostArgs {
  @Field(() => String, { nullable: false })
  id: string;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => PostType, { nullable: true })
  type?: PostType;
  @Field(() => [String], { nullable: true })
  attachmentIds?: string[];
}
