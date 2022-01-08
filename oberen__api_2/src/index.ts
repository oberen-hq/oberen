import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./config";

const run = async () => {
  const conn = await MikroORM.init({
    dbName: "api",
    clientUrl: process.env.DATABASE_URL as string,
    user: "postgres",
    password: "postgres",
    type: "postgresql",
    debug: !__prod__,
  });
};

run().catch((err) => {
  console.error(err);
});
