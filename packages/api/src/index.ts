// Main server file - this is the entry point for the server

import "reflect-metadata"; // Checking types

import {
  __prod__,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  PORT,
  REDIS_URL,
  COOKIE_NAME,
  COOKIE_SECRET,
} from "./config";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { UserResolver, PostResolver } from "./resolvers/";
import {
  User,
  Post,
  Profile,
  Session,
  Error,
  Organization,
  Job,
  Task,
} from "./entities";
import { logger } from "./helpers/";

import path from "path";
import express from "express";
import cors from "cors";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";

const run = async () => {
  logger.info("Server is starting...");

  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: DATABASE_USERNAME || "postgres",
    password: DATABASE_PASSWORD || "postgres",
    database: DATABASE_NAME || "api",
    entities: [User, Post, Profile, Session, Error, Organization, Job, Task],
    migrations: [path.join(__dirname, "/migrations/*")],
    logging: __prod__,
    synchronize: !__prod__,
  });

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis(REDIS_URL || "redis://localhost:6379");

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
      credentials: true,
    }),
  );

  app.use(
    session({
      name: COOKIE_NAME as string,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      },
      secret: COOKIE_SECRET as string,
      resave: false,
      saveUninitialized: false,
    }),
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
    }),
    plugins: [
      __prod__
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageGraphQLPlayground({
            settings: {
              "request.credentials": "include",
            },
          }),
    ],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, () => {
    logger.info(
      `Server has started: ${
        __prod__
          ? "https://oberen.com"
          : "http://localhost:" + PORT + "/graphql"
      }`,
    );
  });
};

run().catch((err) => {
  console.error(err);
});
