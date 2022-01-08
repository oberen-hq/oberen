import { isAuth } from "../middleware/isAuth";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
  Root,
  Int,
  Query,
  UseMiddleware,
} from "type-graphql";
import Post from "../entities/Post";
import { MyContext } from "../types";

@InputType()
class PostInput {
  @Field()
  title!: string;
  @Field()
  text!: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export default class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() post: Post) {
    return post.text.slice(0, 50);
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    return Post.findOne(id);
  }

  @Query(() => [Post], { nullable: true })
  posts(): Promise<Post[] | undefined> {
    return Post.find({});
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Post)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext,
  ): Promise<Post> {
    const post = await Post.create({
      ...input,
      creatorId: req.user.id,
    }).save();

    return post;
  }
}
