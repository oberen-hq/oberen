import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import createSchema from "./utils/createSchema";
import express, { Application } from "express";
import { Context } from "./context";
import { host } from "./constants";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import open from "open";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

export default class Server {
  public app: Application;
  public schema: GraphQLSchema;
  public gqlserver: ApolloServer;
  public prisma: PrismaClient;

  public constructor() {
    dotenv.config();
    this.app = express();
    this.initializeApollo();
    this.applyExpressMiddleware();
    this.setupRoutes();
  }

  private async initializeApollo() {
    this.prisma = new PrismaClient();
    this.schema = await createSchema();
    this.gqlserver = new ApolloServer({
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
      })
    );

    if (process.env.NODE_ENV === "development") {
      this.app.use(morgan("dev"));
    }
  }

  private setupRoutes() {
    this.app.get("/", function (req, res) {
      return res.status(200).json({
        message: "Welcome to the Simplify API!",
      });
    });
  }

  public run() {
    const port = process.env.PORT || 8000;
    const url = `${host}:${port}`;
    this.app.listen(port, () => {
      console.log(`Navigate to ${url}`);
      open(url);
    });
  }
}
