import { PrismaClient } from "@prisma/client/";
import executeOrFail from "../src/utils/executeOrFail";
import faker from "faker";
import { User } from "../src/resolver-types/models";
import dotenv from "dotenv";
dotenv.config();

class Seeder extends PrismaClient {
  createLocalUsers = async (amount: number = 30): Promise<void> => {
    return executeOrFail(async () => {
      let data: any = [];

      for (let i = 0; i <= amount; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        const avatarUrl = "/";
        const bio = "This bio is cool";

        const user = await this.user.create({
          data: {
            username,
            email,
            password,
            isLocal: true,
          },
        });
      }
    });
  };
}

const main = async () => {
  const seed = new Seeder();

  await seed.$connect();
  await seed.createLocalUsers();
  await seed.$disconnect();
  process.exit(0);
};

main().catch((err) => {
  console.error(err);
});
