import "reflect-metadata";

import {
  __prod__,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} from "./config";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver, PostResolver } from "./resolvers/";
import { User, Post } from "./entities";

import path from "path";
import express from "express";
import cors from "cors";

const run = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: DATABASE_USERNAME || "postgres",
    password: DATABASE_PASSWORD || "postgres",
    database: DATABASE_NAME || "api",
    entities: [Post, User],
    migrations: [path.join(__dirname, "/migrations/*")],
    logging: !__prod__,
    synchronize: !__prod__,
  });

  const app = express();
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
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

  apolloServer.applyMiddleware({
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
