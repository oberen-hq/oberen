import * as config from "../config";

export default function checkEnv() {
  // Check the environment variables before server start
  for (let item in config) {
    if (item === undefined) {
      throw new Error("There is an undefined variable in your .env file!");
    }
  }

  console.log("Environment variables checked...");
}
