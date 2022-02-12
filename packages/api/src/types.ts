import { Request, Response } from "express";
import { Redis } from "ioredis";
import { User } from "./entities";

// Types

export type MyContext = {
  req: Request & {
    session: any & {
      user: User;
    };
    user: User;
  };
  res: Response;
  redis: Redis;
};
