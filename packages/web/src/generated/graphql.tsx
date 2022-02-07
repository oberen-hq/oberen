import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: PostResponse;
  delete: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  update: UserResponse;
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};


export type MutationRegisterArgs = {
  input: RegisterUserInput;
};


export type MutationUpdateArgs = {
  id: Scalars['Int'];
  input: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  text: Scalars['String'];
  textSnippet: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PostInput = {
  text: Scalars['String'];
  title: Scalars['String'];
};

export type PostResponse = {
  __typename?: 'PostResponse';
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
};

export type Query = {
  __typename?: 'Query';
  checkEmailExists: Scalars['Boolean'];
  findPostsByUserId?: Maybe<Array<Post>>;
  me?: Maybe<UserResponse>;
  post?: Maybe<PostResponse>;
  posts?: Maybe<Array<Post>>;
  user?: Maybe<UserResponse>;
  users?: Maybe<Array<User>>;
};


export type QueryCheckEmailExistsArgs = {
  email: Scalars['String'];
};


export type QueryFindPostsByUserIdArgs = {
  id: Scalars['Int'];
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type RegisterUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateUserInput = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', message?: string | null, user?: { __typename?: 'User', id: number, username: string, email: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };


export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
  register(input: {username: $username, email: $email, password: $password}) {
    user {
      id
      username
      email
    }
    errors {
      field
      message
    }
    message
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};