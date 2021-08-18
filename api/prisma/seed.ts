import { PrismaClient } from "@prisma/client/";
import executeOrFail from "../src/utils/executeOrFail";
import faker from "faker";
import { User } from "~/resolver-types/models";

class Seeder extends PrismaClient {
  deleteAll = async (): Promise<void> => {
    executeOrFail(async () => {
      await this.user.deleteMany({});
      await this.userProfile.deleteMany({});
    });
    console.log("All documents deleted.");
  };

  createLocalUsers = async (amount: number = 30): Promise<void> => {
    return executeOrFail(async () => {
      let data: User[] = [];

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
            profile: {
              create: {
                avatarUrl,
                bio,
              },
            },
          },
          include: {
            profile: true,
          },
        });

        data.push(user);
      }

      console.table(data);
    });
  };
}

const main = async () => {
  const seed = new Seeder();

  await seed.$connect();
  await seed.deleteAll();
  await seed.createLocalUsers();
  await seed.$disconnect();
  process.exit(0);
};

main().catch((err) => {
  console.error(err);
});
