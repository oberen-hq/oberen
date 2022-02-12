import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Resolver,
  Root,
  Int,
  Query,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../middleware/";
import { Post } from "../entities/";
import { MyContext } from "../types";

import { PostInput } from "./inputs";
import { PostResponse } from "./responses";

// @ObjectType()
// class PaginatedPosts {
//   @Field(() => [Post])
//   posts: Post[];
//   @Field()
//   hasMore: boolean;
// }

@Resolver(Post)
export default class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() post: Post) {
    // Get a text snippet of the post, used for embeds
    return post.text.slice(0, 50);
  }

  @Query(() => PostResponse, { nullable: true })
  async post(
    @Arg("id", () => Int) id: number,
  ): Promise<PostResponse | undefined> {
    // Find a post by id

    const post: Post | undefined = await Post.findOne(id);

    if (!post) {
      return {
        errors: [
          {
            field: "Post",
            message: "Couldn't find post.",
          },
        ],
      };
    } else {
      return {
        post,
        message: "Successfully queried post.",
      };
    }
  }

  @Query(() => [Post], { nullable: true })
  posts(): Promise<Post[] | undefined> {
    // Find all posts -> TODO: pagination
    return Post.find({});
  }

  @Query(() => [Post], { nullable: true })
  async findPostsByUserId(
    @Arg("id", () => Int) id: number,
  ): Promise<Post[] | undefined> {
    // Find all posts by user id
    return await Post.find({
      where: {
        creatorId: id,
      },
    });
  }

  @UseMiddleware(isAuth)
  @Mutation(() => PostResponse)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext,
  ): Promise<PostResponse> {
    // Create a new post -> TODO: validate input

    let post: Post | undefined;

    try {
      post = await Post.create({
        ...input,
        userId: req.session.user.id,
      });
    } catch (err: any) {
      return {
        errors: [
          {
            field: "Post",
            message: "Couldn't create post.",
          },
        ],
      };
    }

    return {
      post,
      message: "Successfully created post.",
    };
  }
}
