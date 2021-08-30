import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import UpdatePostArgs from "./args/UpdatePostArgs";
import PostRepo from "../../db/PostRepo";
import { PostResponse } from "./responses/Post.response";

const post = new PostRepo();

@Resolver()
export default class UpdatePostResolver {
  @Mutation(() => PostResponse)
  async updatePost(@Arg("args") args: UpdatePostArgs) {
    const userId = "6129ebca0050dd980091365e";
    return await post.update(userId, args);
  }
}
