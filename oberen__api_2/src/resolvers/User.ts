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

@ObjectType()
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
  async createUser(
    @Arg("input") input: UserInput,
  ): Promise<String | undefined> {
    const accessToken = jwt.sign({ ...input }, process.env.ACCESS_SECRET, {
      expiresIn: "365d",
    });

    await User.create({
      ...input,
      accessToken,
    }).save();

    return accessToken;
  }

  @Query(() => Boolean)
  async checkEmailExists(
    @Arg("email", () => String) email: string,
  ): Promise<Boolean> {
    const existingUser = await User.findOne({ email: email });

    return existingUser ? true : false;
  }
}
