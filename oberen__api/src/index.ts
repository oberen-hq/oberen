/**
 * @copyright @alfiephillips
 * @author @alfiephillips
 * @license Apache
 * @version 1.0
 */

// IMPORTS

import Server from "./Server";
import "reflect-metadata";

// CODE

async function main() {
  const server = new Server();
  await server.run();
}

main().catch((err) => {
  console.error(err);
});
