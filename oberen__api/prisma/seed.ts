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
        +" " + faker.internet.userName();
        const displayName = faker.internet.userName();
        +" " + faker.internet.userName();
        const email = faker.internet.email();
        +faker.internet.email();
        const password = faker.internet.password();
        const avatarUrl = "/";
        const bio = "This bio is cool";
        const token = faker.datatype.uuid();
        const url = faker.internet.url();
        const location = faker.address.city();
        const device = faker.random.word();
        const numbers = faker.datatype.number();

        const user = await this.user.create({
          data: {
            username,
            email,
            password,
            isLocal: true,
            profile: {
              create: {
                avatarURL: avatarUrl,
                bio: bio,
                settings: {
                  create: {
                    location: location,
                    website: url,
                  },
                },
              },
            },
            tokens: {
              create: [
                {
                  accessToken: token,
                  refreshToken: token,
                },
              ],
            },
            sessions: {
              create: [
                {
                  provider: "Safari",
                  device: device,
                  userAgent:
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
                  ip: numbers.toString(),
                  isCurrent: true,
                },
              ],
            },
          },
          include: {
            profile: true,
            tokens: true,
            sessions: true,
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
  await seed.createLocalUsers();
  await seed.$disconnect();
  process.exit(0);
};

main().catch((err) => {
  console.error(err);
});
