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
import { isAuth } from "../middleware/";
import { User } from "../entities/";

import jwt from "jsonwebtoken";
import argon from "argon2";
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

  @Field(() => String, { nullable: true })
  message?: string;
}

@InputType()
class RegisterUserInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
class LoginUserInput {
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
    console.log(req.user);
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
        message: "Successfully queried user.",
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
      return {
        user,
        message: "Successfully queried users.",
      };
    }
  }

  @Query(() => [User], { nullable: true })
  async users(): Promise<User[] | undefined> {
    return await User.find({});
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Arg("input") input: RegisterUserInput,
  ): Promise<UserResponse | String> {
    let user;
    input.password = await argon.hash(input.password);

    const accessToken = jwt.sign(
      { email: input.email },
      process.env.ACCESS_SECRET,
      {
        expiresIn: "365d",
      },
    );

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
      message: "Successfully created user.",
    };
  }

  @Mutation(() => UserResponse)
  async loginUser(
    @Arg("input") input: LoginUserInput,
  ): Promise<UserResponse | String> {
    let user: any;
    let accessToken: string;

    try {
      user = await User.findOne({ email: input.email });

      accessToken = await jwt.sign(
        { email: input.email },
        process.env.ACCESS_SECRET,
        {
          expiresIn: "365d",
        },
      );
    } catch (error) {
      console.error(error);
      return {
        errors: [
          {
            field: "User",
            message: "Internal server error.",
          },
        ],
      };
    }

    if (!user) {
      return {
        errors: [
          {
            field: "User",
            message: "A user with that email does not exist.",
          },
        ],
      };
    }

    const correctPassword = await argon.verify(user.password, input.password);

    if (!correctPassword) {
      return {
        errors: [
          {
            field: "User",
            message: "Login failed. Password does not match.",
          },
        ],
      };
    } else {
      await User.update({ email: input.email }, { accessToken: accessToken });

      return {
        token: accessToken,
        user,
        message: "Successfully logged in user.",
      };
    }
  }

  @Query(() => Boolean)
  async checkEmailExists(
    @Arg("email", () => String) email: string,
  ): Promise<Boolean> {
    const existingUser = await User.findOne({ email: email });

    return existingUser ? true : false;
  }
}
