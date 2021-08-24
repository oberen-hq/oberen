import Server from "./server";
import "reflect-metadata";

async function main() {
  const server = new Server();
  server.run();
}

main().catch((err) => {
  console.error(err);
});
