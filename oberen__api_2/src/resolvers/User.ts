import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
  Root,
  Int,
  Query,
  UseMiddleware,
} from "type-graphql";
import { MyContext } from "../types";
import { isAuth } from "../middleware/isAuth";

import User from "../entities/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

@InputType()
class UserInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

class PaginatedUsers {
  @Field(() => [User])
  users: User[];

  @Field()
  hasMore: boolean;
}

@Resolver(User)
export default class UserResolver {
  @UseMiddleware(isAuth)
  @Query(() => User, { nullable: true })
  me(@Ctx() context: MyContext) {
    return context.req.user;
  }
  @Query(() => User, { nullable: true })
  user(@Arg("id", () => Int) id: number): Promise<User | undefined> {
    return User.findOne(id);
  }

  @Query(() => [User], { nullable: true })
  posts(): Promise<User[] | undefined> {
    return User.find({});
  }

  @Mutation(() => String)
  async createUser(@Arg("input") args: UserInput): Promise<String | undefined> {
    const accessToken = jwt.sign({ ...args }, process.env.ACCESS_SECRET);

    await User.create({
      ...args,
      accessToken,
    }).save();

    return accessToken;
  }
}
