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
import { RegisterUserInput, LoginUserInput } from "./inputs";

import argon from "argon2";

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
  message?: string;
}

@Resolver(User)
export default class UserResolver {
  @UseMiddleware(isAuth)
  @Query(() => UserResponse, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    // Check if there is a userId on the session
    if (!req.session.user) {
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
        user: req.session.user,
        message: "Successfully queried user.",
      };
    }
  }

  @Query(() => UserResponse, { nullable: true })
  async user(@Arg("id", () => Int) id: number): Promise<UserResponse> {
    // Get a user based on the id provided
    const user: User | undefined = await User.findOne(id);

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
  async users(): Promise<User[]> {
    // List users -> TODO: pagination and filtering based on active/inactive
    return await User.find({});
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("input") input: RegisterUserInput,
    @Ctx() { req }: MyContext,
  ): Promise<UserResponse> {
    // Register a new user and store the session -> TODO: validate input
    input.password = await argon.hash(input.password);

    let user: User;

    try {
      user = await User.create({
        ...input,
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

    req.session!.user = user;
    req.session.save();

    return {
      user,
      message: "Successfully created user.",
    };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("input") input: LoginUserInput,
    @Ctx() { req }: MyContext,
  ): Promise<UserResponse> {
    // Login a user and store the session -> TODO: validate input

    const user: User | undefined = await User.findOne({
      where: { email: input.email },
    });

    if (!user) {
      return {
        errors: [
          {
            field: "User",
            message: "A user with that email doesn't exist.",
          },
        ],
      };
    }

    const valid = await argon.verify(user.password, input.password);

    if (!valid) {
      return {
        errors: [
          {
            field: "User",
            message: "Login failed. Please check your credentials.",
          },
        ],
      };
    }

    req.session!.user = user;
    req.session.save();

    return {
      user,
      message: "Successfully logged in.",
    };
  }

  @Query(() => Boolean)
  async checkEmailExists(
    @Arg("email", () => String) email: string,
  ): Promise<Boolean> {
    // Check if a user exists with the provided email exists
    const existingUser: User | undefined = await User.findOne({ email: email });

    return existingUser ? true : false;
  }
}
