export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const ACCESS_SECRET = process.env.ACCESS_SECRET;
export const PORT = process.env.ACCESS_SECRET || 4000;
export const REDIS_URL = process.env.REDIS_URL;
export const __prod__ = process.env.NODE_ENV === "production" ? true : false;
