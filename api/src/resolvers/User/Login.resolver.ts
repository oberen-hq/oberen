import { Resolver, Mutation, Arg } from "type-graphql";
import { LocalUserResponse } from "./responses/User.response";
import RegisterArgs from "./args/RegisterArgs";
import LocalUserRepo from "../../db/LocalUserRepo";
import executeOrFail from "../..//utils/executeOrFail";
import { ApolloError } from "apollo-server-core";
