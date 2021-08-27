import { PrismaClient } from "@prisma/client";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { PostResponse } from "../resolvers/Post/responses/Post.response";
import connectIdArray from "../utils/connectIdArray";
import { PostDataType } from "./types/index";
import { Post } from "../resolver-types/models";
import { massOptions } from "./types";

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
          creator: { connect: { id: "611cdd0500097547004e430e" } },
        };

        const createdPost = await this.post.create({
          data: post,
          include: {
            attachments: true,
          },
        });

        return {
          post: createdPost,
          attachments: createdPost.attachments,
        };
      } catch (err) {
        throw new ApolloError(err.message, "500");
      }
    });
  };

  findById = async (postId: string): Promise<PostResponse | ApolloError> => {
    return executeOrFail(async () => {
      const post = await this.post.findFirst({
        where: {
          id: postId,
        },
        include: {
          attachments: true,
        },
      });

      if (post) {
        return {
          post: post,
          attachments: post.attachments,
        };
      } else {
        throw new ApolloError("That post does not exist", "404");
      }
    });
  };

  findInMass = async (
    massOptions: massOptions
  ): Promise<Post[] | ApolloError> => {
    return executeOrFail(async () => {
      const posts = await this.post.findMany({
        skip: massOptions?.skip,
        take: massOptions?.limit,
      });

      if (posts) {
        return posts;
      } else {
        throw new ApolloError("Error finding users.", "500");
      }
    });
  };
}
