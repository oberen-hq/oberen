import { PrismaClient } from "@prisma/client";
import executeOrFail from "../utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
import { PostResponse } from "../resolvers/Post/responses/Post.response";
import connectIdArray from "../utils/connectIdArray";
import { PostDataType, UpdatePostType } from "./types/index";
import { Post, User } from "../resolver-types/models";
import { massOptions } from "./types";

import mongoose from "mongoose";

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
          creator: { connect: { id: "6129ebca0050dd980091365e" } },
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
        throw new ApolloError(err.message, "internal_server_error");
      }
    });
  };

  update = async (
    userId: string,
    args: UpdatePostType
  ): Promise<PostResponse | ApolloError> => {
    return executeOrFail(async () => {
      await this._userIsCreator(userId, args.id);

      const updatePostType = this.post.update;
      type PostType = Parameters<typeof updatePostType>[0]["data"];
      const post: PostType = {};

      if (args.title) post.title = args.title;
      if (args.description) post.description = args.description;
      if (args.attachmentIds)
        post.attachments = connectIdArray(args.attachmentIds);
      if (args.type) post.type = args.type;

      const updatedPost = await this.post.update({
        where: { id: args.id },
        data: post,
        include: {
          attachments: true,
        },
      });

      if (updatedPost) {
        return {
          post: updatedPost,
          attachments: updatedPost?.attachments,
        };
      } else {
        return new ApolloError("Failed updating post", "internal_server_error");
      }
    });
  };

  delete = async (
    userId: string,
    postId: string
  ): Promise<string | ApolloError> => {
    return executeOrFail(async () => {
      const post = await this.post.findFirst({
        where: {
          id: postId,
        },
      });

      if (!post) {
        throw new ApolloError("That post does not exist", "post_doesn't exist");
      }

      if (this._userIsCreator(userId, postId)) {
        await this.post.delete({
          where: {
            id: postId,
          },
        });

        return "Post deleted";
      } else {
        throw new ApolloError(
          "Unauthenticated for this action",
          "not_authenticated"
        );
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
        throw new ApolloError("That post does not exist", "post_doesn't_exist");
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
        throw new ApolloError("No posts were found", "no_data");
      }
    });
  };

  _userIsCreator = async (
    creatorId: string,
    postId: string,
    validate = true
  ) => {
    const userInPost = !!(await this.post.findFirst({
      where: { id: postId, creatorId: creatorId },
    }));
    if (validate && !userInPost)
      throw new ApolloError("User does not own post", "invalid_id");

    return userInPost;
  };
}
