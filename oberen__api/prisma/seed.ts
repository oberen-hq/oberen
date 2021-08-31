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

  likeOnePost = async (postId: string) => {
    const userId = "612d3098002d054800ee7322";

    try {
      const likedPost = this.post.update({
        where: { id: postId },
        data: { likers: { connect: [{ id: userId }] } },
        include: {
          likers: true,
        },
      });

      console.table(likedPost);
    } catch (err) {
      console.error(err);
    }
  };

  findPost = async (postId: string) => {
    const post = await this.post.findFirst({
      where: {
        id: postId,
      },
    });

    console.log(post);
  };
}

const main = async () => {
  const seed = new Seeder();

  await seed.$connect();
  // await seed.createLocalUsersAndPosts();
  // await seed.likeOnePost("612cbe8f004ce926002151f2");
  await seed.findPost("612cbe8f004ce926002151f2");
  await seed.$disconnect();
  process.exit(0);
};

main().catch((err) => {
  console.error(err);
});
