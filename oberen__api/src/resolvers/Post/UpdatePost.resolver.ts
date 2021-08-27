import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import UpdatePostArgs from "./args/UpdatePostArgs";
import PostRepo from "../../db/PostRepo";

const post = new PostRepo();

@Resolver()
export default class UpdatePostResolver {
  @Mutation(() => String)
  async updatePost(@Arg("args") args: UpdatePostArgs) {
    const userId = "jiwehnfbwihnfwi";
    return await post.update(userId, args);
  }
}
