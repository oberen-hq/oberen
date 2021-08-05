import {
  Resolver,
  Mutation,
  Arg,
  Field,
  Ctx,
  ObjectType,
  Query,
  FieldResolver,
  Root,
} from "type-graphql";

import bcrypt from "bcrypt";

import { User } from "../../resolver-types/models";
import RegisterArgs from "./args/RegisterArgs";

import { Prisma } from "@prisma/client";

import { Context } from "../../context";
import { ApolloError } from "apollo-server-errors";
import executeOrFail from "../..//utils/executeOrFail";

@Resolver()
export default class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg("args") args: RegisterArgs,
    @Ctx() { req, prisma }: Context
  ) {
    type userType = Parameters<typeof prisma.user.create>[0]["data"];
    type userProfileType = Parameters<
      typeof prisma.userProfile.create
    >[0]["data"];

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(args.password, salt);

    const profile: userProfileType = {};

    const createdProfile = await prisma.userProfile.create({
      data: profile,
    });

    const user: userType = {
      username: args.username,
      email: args.email,
      password: hashedPassword,
      profile: {
        connect: {
          id: profile.id,
        },
      },
    };

    const createdUser = await prisma.user.create({
      data: user,
    });

    return createdUser;
  }
}
