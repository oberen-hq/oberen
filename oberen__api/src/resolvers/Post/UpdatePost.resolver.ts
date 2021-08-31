import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import UpdatePostArgs from "./args/UpdatePostArgs";
import PostRepo from "../../db/PostRepo";
import { PostResponse } from "./responses/Post.response";

import { IsAuthenticated } from "../../middleware/isAuthenticated.middleware";
import { Context } from "../../types";

const post = new PostRepo();

@Resolver()
export default class UpdatePostResolver {
  @IsAuthenticated()
  @Mutation(() => PostResponse)
  async updatePost(@Arg("args") args: UpdatePostArgs, @Ctx() { req }: Context) {
    const user = req.user;
    return await post.update(user.id, args);
  }
}
