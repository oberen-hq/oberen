// IMPORTS

import connectIdArray from "../utils/connectIdArray";
import executeOrFail from "../utils/executeOrFail";

import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-core";
import { PostResponse } from "../resolvers/Post/responses/Post.response";
import { PostDataType, UpdatePostType } from "./types/index";
import { Post } from "../resolver-types/models";
import { massOptions } from "./types";

// CODE

export default class PostRepo extends PrismaClient {
  /**
   * Create a post
   *
   * @param   userId
   * @param   postData
   * @returns {post} The created post
   *
   * **/

  create = async (
    userId: string,
    postData: PostDataType,
  ): Promise<PostResponse | ApolloError> => {
    return executeOrFail(async () => {
      try {
        const createPostType = this.post.create;
        type PostType = Parameters<typeof createPostType>[0]["data"]; // Define types of post

        const post: PostType = {
          title: postData.title,
          description: postData.description,
          type: postData.type,
          attachments: connectIdArray(postData.attachmentIds),
          likers: connectIdArray(postData.likerIds),
          comments: connectIdArray(postData.commentIds),
          creator: { connect: { id: userId } },
        };

        // Create the post

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

  /**
   * Update an existing post
   *
   * @param   userId
   * @param   args
   * @returns {post} The updated post
   *
   * **/

  update = async (
    userId: string,
    args: UpdatePostType,
  ): Promise<PostResponse | ApolloError> => {
    return executeOrFail(async () => {
      await this._userIsCreator(userId, args.id);

      const updatePostType = this.post.update;
      type PostType = Parameters<typeof updatePostType>[0]["data"]; // Define post types
      const post: PostType = {}; // Default value of post as empty object

      // Update the post accordingly to the existing value in the function arguments

      if (args.title) post.title = args.title;
      if (args.description) post.description = args.description;
      if (args.attachmentIds)
        post.attachments = connectIdArray(args.attachmentIds);
      if (args.type) post.type = args.type;

      // Update the post

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

  /**
   * Delete a post
   *
   * @param   userId
   * @param   postId
   * @returns {string} A confirmation message on the post deletion
   *
   * **/

  delete = async (
    userId: string,
    postId: string,
  ): Promise<string | ApolloError> => {
    return executeOrFail(async () => {
      const post = await this.post.findFirst({
        // Find the post from the provided postId
        where: {
          id: postId,
        },
      });

      if (!post) {
        throw new ApolloError("That post does not exist", "post_doesn't exist");
      }

      if (await this._userIsCreator(userId, postId)) {
        // Check if the user is the creator of the post, this step is essential or provides as a serious security issue
        await this.post.delete({
          where: {
            id: postId,
          },
        });

        return "Post deleted";
      } else {
        throw new ApolloError(
          "Unauthenticated for this action",
          "not_authenticated",
        );
      }
    });
  };

  /**
   * Find a post by id
   *
   * @param   postId
   * @returns {post} The post
   *
   * **/

  findById = async (postId: string): Promise<PostResponse | ApolloError> => {
    return executeOrFail(async () => {
      const post = await this.post.findFirst({
        // Find the post from the provided postId
        where: {
          id: postId,
        },
        include: {
          // Include all public factors and relations to the post
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

  /**
   * Find all posts
   *
   * @param   massOptions
   * @returns {[post]} A list of posts
   *
   * **/

  findInMass = async (
    massOptions: massOptions,
  ): Promise<Post[] | ApolloError> => {
    return executeOrFail(async () => {
      const posts = await this.post.findMany({
        // Find posts based on the massOptions argument to filter posts
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

  /**
   * Find a user by id
   *
   * @param   creatorId
   * @param   postId
   * @param   validate @default true
   * @returns {user} The access token and the created user
   *
   * **/

  _userIsCreator = async (
    creatorId: string,
    postId: string,
    validate = true,
  ) => {
    // Check if the user is the owner of the post from postId and creatorId
    const userInPost = !!(await this.post.findFirst({
      where: { id: postId, creatorId: creatorId },
    }));

    // Check if validate is true and if the user is not in the post
    if (validate && !userInPost)
      throw new ApolloError("User does not own post", "invalid_id");

    return userInPost;
  };
}
