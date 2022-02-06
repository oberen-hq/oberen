import dotenv from "dotenv";
dotenv.config();

export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const ACCESS_SECRET = process.env.ACCESS_SECRET;
export const PORT = process.env.PORT || 4000;
export const REDIS_URL = process.env.REDIS_URL;
export const COOKIE_NAME = process.env.COOKIE_NAME || "qid";
export const COOKIE_SECRET = process.env.COOKIE_SECRET;
export const __prod__ = process.env.NODE_ENV === "production" ? true : false;
