import { Length } from "class-validator";
import { InputType, Field } from "type-graphql";
import { Role } from "../../../resolver-types/enums/Role";

@InputType()
export default class RegisterArgs {
  @Length(5, 30)
  @Field()
  username: string;
  @Length(5, 100)
  @Field()
  email: string;
  @Length(8, 1024)
  @Field()
  password: string;
}
