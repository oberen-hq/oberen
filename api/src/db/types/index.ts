export interface userOptions {
  limit?: number;
  skip?: number;
}

export interface RegisterUserDataType {
  username: string;
  email: string;
  password: string;
  avatarUrl?: string;
  bio?: string;
}

export interface LoginUserDataType {
  email: string;
  password: string;
}
