import { PrismaClient } from "@prisma/client";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { PostResponse } from "../resolvers/Post/responses/Post.response";
import connectIdArray from "../utils/connectIdArray";
import { PostDataType } from "./types/index";
import { Post } from "../resolver-types/models";

export default class PostRepo extends PrismaClient {
  create = async (
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
          likers: connectIdArray(postData.likerIds),
          comments: connectIdArray(postData.commentIds),
          creator: { connect: { id: "611cdd0500097547004e430e" } },
        };

        const createdPost = await this.post.create({
          data: post,
        });

        return {
          post: createdPost,
        };
      } catch (err) {
        throw new ApolloError(err.message, "500");
      }
    });
  };

  findById = async (postId: string): Promise<Post | ApolloError> => {
    return executeOrFail(async () => {
      const post = await this.post.findFirst({
        where: {
          id: postId,
        },
      });

      if (post) {
        return post;
      } else {
        throw new ApolloError("That post does not exist", "404");
      }
    });
  };
}
