// IMPORTS

import { Length } from "class-validator";
import { InputType, Field } from "type-graphql";

// CODE

@InputType()
export default class RegisterArgs {
  @Length(5, 30)
  @Field(() => String)
  username: string;
  @Length(5, 100)
  @Field(() => String)
  email: string;
  @Length(8, 1024)
  @Field(() => String)
  password?: string;
  @Field(() => String, { nullable: true })
  avatarUrl?: string;
  @Length(0, 1000)
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Boolean, { nullable: false })
  isLocal: boolean;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  device?: string;
  @Field(() => String)
  userAgent: string;
  @Field(() => String)
  ip: string;
}
