import { PostType } from "../../resolver-types/enums";

export interface userOptions {
  limit?: number;
  skip?: number;
}

export interface RegisterUserDataType {
  username: string;
  email: string;
  password?: string;
  avatarUrl?: string;
  bio?: string;
  isLocal: boolean;
}

export interface LoginUserDataType {
  email: string;
  password: string;
}

type AttachmentId = {
  id: string;
};

export interface PostDataType {
  title: string;
  description?: string;
  type: PostType;
  attachmentIds?: string[];
}
