import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Post, User } from "../../resolver-types/models";
import { Context } from "../../types";
import LikeUnlikePostArgs from "./args/LikeUnlikePostArgs";
