import { PrismaClient } from "@prisma/client";
import { Post } from "~/resolver-types/models";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { userOptions } from "./types";
import { PostResponse } from "../resolvers/Post/responses/Post.response";
import { PostDataType } from "./types/index";

export default class PostRepo extends PrismaClient {
  create = async (
    currentUser: any,
    postData: PostDataType
  ): Promise<PostResponse | ApolloError> => {
    return executeOrFail(async () => {
      try {
        const post = await this.post.create(postData);

        return {
          post,
          user: currentUser,
        };
      } catch (err) {
        throw new ApolloError(err.message, "500");
      }
    });
  };
}
