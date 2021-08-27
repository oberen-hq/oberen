import { PrismaClient } from "@prisma/client/";
import executeOrFail from "../src/utils/executeOrFail";
import faker from "faker";
import { User } from "../src/resolver-types/models";

class Seeder extends PrismaClient {
  createLocalUsersAndPosts = async (amount: number = 30): Promise<void> => {
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

        const post = await this.post.create({
          data: {
            title: faker.random.word(),
            description: faker.random.words(),
            type: "post",
            creator: {
              connect: { id: user.id },
            },
          },
          include: {
            attachments: true,
          },
        });

        data.push(user);
        data.push(post);
      }

      console.table(data);
    });
  };
}

const main = async () => {
  const seed = new Seeder();

  await seed.$connect();
  await seed.createLocalUsersAndPosts();
  await seed.$disconnect();
  process.exit(0);
};

main().catch((err) => {
  console.error(err);
});
