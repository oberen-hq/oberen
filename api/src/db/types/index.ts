import { PostType } from "~/resolver-types/enums";
import { Attachment } from "~/resolver-types/models";

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

export interface PostDataType {
  title: string;
  description?: string;
  type: PostType;
  attachments?: Attachment[];
}
