export const DATABASE_NAME = process.env.DATABASE_NAME as string;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME as string;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string;
export const ACCESS_SECRET = process.env.ACCESS_SECRET as string;
export const PORT = process.env.ACCESS_SECRET || 4000;
export const __prod__ = process.env.NODE_ENV === "production" ? true : false;
