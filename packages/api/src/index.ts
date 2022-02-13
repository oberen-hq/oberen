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
  DATABASE_HOST,
} from "./config";
import { createConnection, Connection } from "typeorm";
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

export default class Server {
  private app: express.Application;
  private db: Connection | undefined;
  private apolloServer: ApolloServer;
  private redis: Redis.Redis;
  private store: connectRedis.RedisStore;

  constructor() {
    this.app = express();
    this.db;
  }

  public getConnection() {
    return this.db;
  }

  private async createConnection() {
    this.db = await createConnection({
      type: "postgres",
      url: `postgres://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:5432/${DATABASE_NAME}`,
      entities: [User, Post, Profile, Session, Error, Organization, Job, Task],
      migrations: [path.join(__dirname, "/migrations/*")],
      logging: __prod__,
      synchronize: !__prod__,
    });

    logger.info("Connected to the database successfully.");
  }

  private async createRedis() {
    this.redis = new Redis(REDIS_URL || "redis://localhost:6379");
    this.store = connectRedis(session);

    logger.info("Connected to Redis successfully.");
  }

  private async createMiddleware() {
    this.app.set("trust proxy", 1);
    this.app.use(
      cors({
        origin: ["http://localhost:3000", "https://studio.apollographql.com"],
        credentials: true,
      }),
    );

    this.app.use(
      session({
        name: COOKIE_NAME as string,
        store: new this.store({
          client: this.redis,
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
  }

  private async createApolloServer() {
    this.apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [PostResolver, UserResolver],
        validate: false,
      }),
      context: ({ req, res }) => ({
        req,
        res,
        redis: this.redis,
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

    await this.apolloServer.start();

    this.apolloServer.applyMiddleware({
      app: this.app,
      cors: false,
    });
  }

  private async createRoutes() {
    this.app.get("/", (_, res) => {
      res.send("Hello World!");
    });
  }

  private async start() {
    await this.createConnection();
    await this.createRedis();
    await this.createMiddleware();
    await this.createApolloServer();
    await this.createRoutes();

    this.app.listen(PORT as number, () => {
      logger.info(
        `Server has started: ${
          __prod__
            ? "https://oberen.com"
            : "http://localhost:" + PORT + "/graphql"
        }`,
      );
    });
  }

  public async startServer() {
    try {
      await this.start();
    } catch (err) {
      console.error(err);
    }
  }
}

const server = new Server();
server.startServer();
