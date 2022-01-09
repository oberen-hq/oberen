import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
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

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  token?: string;
}

@ObjectType()
class PaginatedUsers {
  @Field(() => [User])
  users: User[];

  @Field()
  hasMore: boolean;
}

@InputType()
class UserInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

@Resolver(User)
export default class UserResolver {
  @UseMiddleware(isAuth)
  @Query(() => UserResponse, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    if (!req.user) {
      return {
        errors: [
          {
            field: "User",
            message: "Couldn't retrieve current user.",
          },
        ],
      };
    } else {
      return {
        user: req.user,
      };
    }
  }
  @Query(() => UserResponse, { nullable: true })
  async user(@Arg("id", () => Int) id: number): Promise<UserResponse> {
    const user = await User.findOne(id);

    if (!user) {
      return {
        errors: [
          {
            field: "User",
            message: "A user with that id doesn't exist.",
          },
        ],
      };
    } else {
      return { user };
    }
  }

  @Query(() => [User], { nullable: true })
  async users(): Promise<User[] | undefined> {
    return await User.find({});
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Arg("input") input: UserInput,
  ): Promise<UserResponse | String> {
    const accessToken = jwt.sign({ ...input }, process.env.ACCESS_SECRET, {
      expiresIn: "365d",
    });

    let user;

    try {
      user = await User.create({
        ...input,
        accessToken,
      }).save();
    } catch (error: any) {
      if (error.code === "23505") {
        return {
          errors: [
            {
              field: "User",
              message: "Username or email already exists",
            },
          ],
        };
      } else {
        return {
          errors: [
            {
              field: "User",
              message: "Internal server error. Please try again.",
            },
          ],
        };
      }
    }

    return {
      user,
      token: accessToken,
    };
  }

  @Query(() => Boolean)
  async checkEmailExists(
    @Arg("email", () => String) email: string,
  ): Promise<Boolean> {
    const existingUser = await User.findOne({ email: email });

    return existingUser ? true : false;
  }
}
