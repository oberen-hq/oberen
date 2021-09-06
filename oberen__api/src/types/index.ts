// IMPORTS

import { Request, Response } from "express";
import { PrismaClient } from ".prisma/client";

// CODE

export interface Context {
  prisma: PrismaClient;
  req: Request;
  res: Response;
}

export enum OauthConnectionService {
  github = "github",
  google = "google",
  discord = "discord",
  twitter = "twitter",
  facebook = "facebook",
  apple = "apple",
  instagram = "instagram",
  linkedin = "linkedin",
  local = "local",
}

export enum PostType {
  post = "post",
  job = "job",
  organization = "organization",
  shift = "shift",
  article = "article",
  feedback = "feedback",
  poll = "poll",
}
