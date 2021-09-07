// IMPORTS

import createSchema from "./utils/createSchema";
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import open from "open";
import TokenPairUtil from "./utils/token/utils/TokenPair";
import Regenerate from "./utils/token/resolvers/regenerate";
import Revoke from "./utils/token/resolvers/revoke";
import Validate from "./utils/token/resolvers/validate";

import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import { Context } from "./types";
import { host } from "./constants";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// CODE

export default class Server {
  public app: Application;
  public schema: GraphQLSchema;
  public gqlserver: ApolloServer;
  public prisma: PrismaClient;
  public tokens: TokenPairUtil;

  public constructor() {
    dotenv.config();
    this.app = express();
    this.initializeApollo();
    this.applyExpressMiddleware();
    this.setupRoutes();
    this.setupTokens();
  }

  private async initializeApollo() {
    this.prisma = new PrismaClient();
    this.schema = await createSchema();
    this.gqlserver = new ApolloServer({
      introspection: true,
      schema: this.schema,
      context: ({ req, res }: Context) => ({
        req,
        res,
        prisma: this.prisma,
      }),
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });

    await this.gqlserver.start();
    this.gqlserver.applyMiddleware({
      app: this.app,
    });
  }

  private applyExpressMiddleware() {
    this.app.use(
      cors({
        origin: "*",
      }),
    );

    if (process.env.NODE_ENV === "development") {
      this.app.use(morgan("dev"));
    }
  }

  private setupRoutes() {
    this.app.get("/", function (_, res) {
      return res.status(200).json({
        message: "Welcome to the Oberen API!",
      });
    });
  }

  private setupTokens() {
    this.tokens = new TokenPairUtil();

    this.app.use("/api/token/regenerate", Regenerate(this.prisma));
    this.app.use("/api/token/revoke", Revoke(this.prisma));
    this.app.use("/api/token/validate", Validate(this.prisma));
  }

  public run() {
    const port = process.env.PORT || 4000;
    const url = `${host}:${port}`;
    this.app.listen(port, () => {
      console.log(`Navigate to ${url + "/graphql"}`);
      open(url + "/graphql");
    });
  }
}
