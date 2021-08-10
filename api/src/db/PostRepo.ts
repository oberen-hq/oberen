import { PrismaClient } from "@prisma/client";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { PostResponse } from "../resolvers/Post/responses/Post.response";
import connectIdArray from "src/utils/connectIdArray";
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
          attachments: connectIdArray(postData.attachmentIds),
          creator: { connect: { id: currentUser.id } },
        };

        const createdPost = await this.post.create({
          data: post,
        });

        return {
          post: createdPost,
          user: currentUser,
        };
      } catch (err) {
        throw new ApolloError(err.message, "500");
      }
    });
  };
}
