declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    PORT: number;
    NODE_ENV: string;
  }
}
