declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    ACCESS_SECRET: string;
    PORT: number;
    REDIS_URL: string;
    NODE_ENV: string;
  }
}
