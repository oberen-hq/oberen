/**
 * @copyright @alfiephillips
 * @author @alfiephillips
 * @license Apache
 * @version 1.0
 */

// IMPORTS

import Server from "./server";
import "reflect-metadata";

// CODE

async function main() {
  const server = new Server();
  await server.run();
}

main().catch((err) => {
  console.error(err);
});
