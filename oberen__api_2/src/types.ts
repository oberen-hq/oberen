import { Request, Response } from "express";

interface User {
  id: string;
}

export type MyContext = {
  req: Request & {
    user: User;
  };
  res: Response;
};
