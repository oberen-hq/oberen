import {
  Arg,
  Ctx,
  Mutation,
  Resolver,
  Int,
  Query,
  UseMiddleware,
} from "type-graphql";
import { MyContext } from "../types";
import { isAuth } from "../middleware/";
import { User } from "../entities/";
import { UpdateUserInput, RegisterUserInput, LoginUserInput } from "./inputs";
import { UserResponse } from "./responses";
import { COOKIE_NAME } from "../config";

import argon from "argon2";

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

  @UseMiddleware(isAuth)
  @Mutation(() => UserResponse, { nullable: false })
  async update(
    @Arg("id", () => Int) id: number,
    @Arg("input") input: UpdateUserInput,
    @Ctx() { req }: MyContext,
  ): Promise<UserResponse> {
    // Update a user based on the id provided
    if (req.session.user.id !== id) {
      return {
        errors: [
          {
            field: "User",
            message: "You are not authorized to update this user.",
          },
        ],
      };
    }

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
    }

    await User.update(id, {
      ...input,
    });

    req.session!.user = user;

    return {
      user,
      message: "Successfully updated user.",
    };
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Boolean)
  async delete(
    @Arg("id", () => Int) id: number,
    @Ctx() { req, res }: MyContext,
  ): Promise<Boolean> {
    // Delete a user based on the id provided

    return new Promise(async (resolve) => {
      if (req.session.user.id !== id) {
        resolve(false);
      } else {
        await User.delete(id);

        req.session!.destroy((err: any) => {
          res.clearCookie(COOKIE_NAME);

          if (err) {
            console.error(err);
          } else {
            resolve(true);
          }
        });
      }
    });
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext): Promise<Boolean> {
    // Logout a user and destroy the session
    return new Promise((resolve) => {
      req.session!.destroy((err: any) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.error(err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
  @Query(() => [User], { nullable: true })
  async users(): Promise<User[]> {
    // List users -> TODO: pagination and filtering based on active/inactive
    return await User.find({});
  }

  @Mutation(() => UserResponse, { nullable: false })
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

  @Mutation(() => UserResponse, { nullable: false })
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
