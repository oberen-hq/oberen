// IMPORTS

import { PostType, ErrorType } from "../../resolver-types/enums";

// CODE

export interface massOptions {
  limit?: number;
  skip?: number;
}

export interface RegisterUserDataType {
  username: string;
  email: string;
  password?: string;
  avatarURL?: string;
  bio?: string;
  isLocal: boolean;
  provider?: string;
  device?: string;
  userAgent: string;
  ip: string;
}

export interface LoginUserDataType {
  email: string;
  password: string;
}

export interface PostDataType {
  title: string;
  description?: string;
  type: PostType;
  attachmentIds?: string[];
  hashtagIds?: string[];
  labelIds?: string[];
}

export interface UpdatePostType {
  id: string;
  title?: string;
  description?: string;
  type?: PostType;
  attachmentIds?: string[];
  hashtagIds?: string[];
  labelIds?: string[];
}

export interface HashtagDataType {
  name: string;
}

export interface ErrorDataType {
  type: ErrorType;
  route?: string;
  description: string;
}
