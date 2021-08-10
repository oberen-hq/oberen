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
        const createPostType = this.post.create;
        type PostType = Parameters<typeof createPostType>[0]["data"];
        const post: PostType = {
          title: postData.title,
          description: postData.description,
          type: postData.type,
        };

        throw new ApolloError("error", "500");
      } catch (err) {
        throw new ApolloError(err.message, "500");
      }
    });
  };
}
