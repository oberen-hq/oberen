import { __prod__ } from "./config";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import "reflect-metadata";
import path from "path";
import express from "express";
import cors from "cors";

import PostResolver from "./resolvers/Post";
import UserResolver from "./resolvers/User";

import Post from "./entities/Post";
import User from "./entities/User";

const run = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: (process.env.DATABASE_USERNAME as string) || "postgres",
    password: (process.env.DATABASE_PASSWORD as string) || "postgres",
    database: (process.env.DATABASE_NAME as string) || "api",
    entities: [Post, User],
    migrations: [path.join(__dirname, "/migrations/*")],
    logging: false,
    synchronize: true,
  });

  const app = express();
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: "*",
      credentials: true,
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
    }),
  });

  await apolloServer.start();

  await apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(process.env.PORT || 4000, () => {
    console.log("server started on http://localhost:4000");
  });
};

run().catch((err) => {
  console.error(err);
});
