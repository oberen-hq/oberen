import { PrismaClient } from "@prisma/client";
import { User } from "../resolver-types/models/User";
import bcrypt from "bcrypt";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";

type UserData = {
  username: String;
  email: String;
};

export default class LocalUserRepo extends PrismaClient {
  createUser = async (userData: any): Promise<User | ApolloError> => {
    return executeOrFail(async () => {
      const existingUser = await this.user.findFirst({
        where: {
          username: userData.username,
        },
      });

      if (existingUser) {
        return new ApolloError(
          "A user with that username already exists.",
          "400"
        );
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);

      const user = await this.user.create({
        data: {
          username: userData.username,
          email: userData.email,
          password: hashedPassword,
          profile: {
            create: {
              avatarUrl: userData?.avatarUrl || "",
              bio: userData?.bio || "",
            },
          },
        },
        include: {
          profile: true,
        },
      });

      return user;
    }, "Error creating user!");
  };

  findUserById = async (userId: string): Promise<User | ApolloError> => {
    return executeOrFail(async () => {
      const user = await this.user.findFirst({
        where: {
          id: userId,
        },
        include: {
          profile: true,
        },
      });

      if (user) {
        return user;
      } else {
        return new ApolloError("That user does not exist.", "404");
      }
    });
  };

  findAllUsers = async (): Promise<User[] | ApolloError> => {
    return executeOrFail(async () => {
      const users = await this.user.findMany();

      if (users) {
        return users;
      } else {
        return new ApolloError("Error finding users.", "500");
      }
    });
  };
}
