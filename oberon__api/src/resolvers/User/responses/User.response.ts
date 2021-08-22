import { User } from "../../../resolver-types/models";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class UserResponse {
  @Field(() => String, { nullable: false })
  token: string;
  @Field(() => User, { nullable: false })
  user: User;
}