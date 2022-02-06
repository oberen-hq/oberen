import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
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

  @Query(() => Post, { nullable: true })
  post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    // Find a post by id
    return Post.findOne(id);
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
  @Mutation(() => Post)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext,
  ): Promise<Post> {
    // Create a new post -> TODO: validate input
    const post: Post | undefined = await Post.create({
      ...input,
      creatorId: req.user.id,
    }).save();

    return post;
  }
}
