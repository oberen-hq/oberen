// IMPORTS

import { PostType } from "../../resolver-types/enums";

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
  likerIds?: string[];
  commentIds?: string[];
}

export interface UpdatePostType {
  id: string;
  title?: string;
  description?: string;
  type?: PostType;
  attachmentIds?: string[];
}
