import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */

export type QueryVariables = {};

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type LoginUserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: Post;
  createUser: UserResponse;
  loginUser: UserResponse;
};

export type MutationCreatePostArgs = {
  input: PostInput;
};

export type MutationCreateUserArgs = {
  input: RegisterUserInput;
};

export type MutationLoginUserArgs = {
  input: LoginUserInput;
};

export type Post = {
  __typename?: "Post";
  createdAt: Scalars["String"];
  creator: User;
  creatorId: Scalars["Float"];
  id: Scalars["Float"];
  text: Scalars["String"];
  textSnippet: Scalars["String"];
  title: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type PostInput = {
  text: Scalars["String"];
  title: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  checkEmailExists: Scalars["Boolean"];
  findPostsByUserId?: Maybe<Array<Post>>;
  me?: Maybe<UserResponse>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  user?: Maybe<UserResponse>;
  users?: Maybe<Array<User>>;
};

export type QueryCheckEmailExistsArgs = {
  email: Scalars["String"];
};

export type QueryFindPostsByUserIdArgs = {
  id: Scalars["Int"];
};

export type QueryPostArgs = {
  id: Scalars["Int"];
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type RegisterUserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"];
  email: Scalars["String"];
  id: Scalars["Float"];
  updatedAt: Scalars["String"];
  username: Scalars["String"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type LoginUserMutationVariables = Exact<{
  input: LoginUserInput;
}>;

export type LoginUserMutation = {
  __typename?: "Mutation";
  loginUser: {
    __typename?: "UserResponse";
    token?: string | null | undefined;
    errors?:
      | Array<{ __typename?: "FieldError"; field: string; message: string }>
      | null
      | undefined;
    user?:
      | { __typename?: "User"; id: number; email: string; username: string }
      | null
      | undefined;
  };
};

export type CreateUserMutationVariables = Exact<{
  input: RegisterUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: {
    __typename?: "UserResponse";
    token?: string | null | undefined;
    errors?:
      | Array<{ __typename?: "FieldError"; field: string; message: string }>
      | null
      | undefined;
    user?:
      | { __typename?: "User"; id: number; email: string; username: string }
      | null
      | undefined;
  };
};

export type CheckEmailExistsQueryVariables = Exact<{
  email: Scalars["String"];
}>;

export type CheckEmailExistsQuery = {
  __typename?: "Query";
  checkEmailExists: boolean;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
  __typename?: "Query";
  me?:
    | {
        __typename?: "UserResponse";
        errors?:
          | Array<{ __typename?: "FieldError"; field: string; message: string }>
          | null
          | undefined;
        user?:
          | { __typename?: "User"; id: number; email: string; username: string }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const LoginUserDocument = gql`
  mutation loginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      errors {
        field
        message
      }
      user {
        id
        email
        username
      }
      token
    }
  }
`;
export type LoginUserMutationFn = Apollo.MutationFunction<
  LoginUserMutation,
  LoginUserMutationVariables
>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginUserMutation,
    LoginUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserDocument,
    options,
  );
}
export type LoginUserMutationHookResult = ReturnType<
  typeof useLoginUserMutation
>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
  LoginUserMutation,
  LoginUserMutationVariables
>;
export const CreateUserDocument = gql`
  mutation createUser($input: RegisterUserInput!) {
    createUser(input: $input) {
      errors {
        field
        message
      }
      user {
        id
        email
        username
      }
      token
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const CheckEmailExistsDocument = gql`
  query checkEmailExists($email: String!) {
    checkEmailExists(email: $email)
  }
`;

/**
 * __useCheckEmailExistsQuery__
 *
 * To run a query within a React component, call `useCheckEmailExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckEmailExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckEmailExistsQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheckEmailExistsQuery(
  baseOptions: Apollo.QueryHookOptions<
    CheckEmailExistsQuery,
    CheckEmailExistsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CheckEmailExistsQuery, CheckEmailExistsQueryVariables>(
    CheckEmailExistsDocument,
    options,
  );
}
export function useCheckEmailExistsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CheckEmailExistsQuery,
    CheckEmailExistsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CheckEmailExistsQuery,
    CheckEmailExistsQueryVariables
  >(CheckEmailExistsDocument, options);
}
export type CheckEmailExistsQueryHookResult = ReturnType<
  typeof useCheckEmailExistsQuery
>;
export type CheckEmailExistsLazyQueryHookResult = ReturnType<
  typeof useCheckEmailExistsLazyQuery
>;
export type CheckEmailExistsQueryResult = Apollo.QueryResult<
  CheckEmailExistsQuery,
  CheckEmailExistsQueryVariables
>;
export const Document = gql`
  {
    me {
      errors {
        field
        message
      }
      user {
        id
        email
        username
      }
    }
  }
`;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(
  baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Query, QueryVariables>(Document, options);
}
export function useLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Query, QueryVariables>(Document, options);
}
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;
