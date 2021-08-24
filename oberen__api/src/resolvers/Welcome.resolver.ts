import { Resolver, Query } from "type-graphql";

@Resolver()
export default class WelcomeResolver {
  @Query(() => String)
  async main() {
    return "Welcome to Simplify, a platform either find yourself temporary work, or eager employers that want to work at your company and gain the experience they need to dive into the world of full time work.";
  }
}
