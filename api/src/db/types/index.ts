export interface userOptions {
  limit?: number;
  skip?: number;
}

export interface UserDataType {
  username: string;
  email: string;
  password: string;
  avatarUrl?: string;
  bio?: string;
}
