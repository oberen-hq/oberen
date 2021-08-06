import { User } from "../../../resolver-types/models/User";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class LocalUserResponse {
  @Field(() => String, { nullable: false })
  token: string;
  @Field(() => User, { nullable: false })
  user: User;
}
