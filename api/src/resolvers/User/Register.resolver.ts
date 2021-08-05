import {
  Resolver,
  Mutation,
  Arg,
  Field,
  Ctx,
  ObjectType,
  Query,
  FieldResolver,
  Root,
} from "type-graphql";

import Context from "../../context";
import User from "@prisma/client";
import { ApolloError } from "apollo-server-errors";
import executeOrFail from "../..//utils/executeOrFail";
