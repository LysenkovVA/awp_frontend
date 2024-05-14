/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Auth = {
  __typename?: 'Auth';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type CreateProfileInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTokenInput = {
  fingerPrint?: InputMaybe<Scalars['String']['input']>;
  refreshToken: Scalars['String']['input'];
};

export type CreateUserInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProfile: Profile;
  createToken: Token;
  createUser: User;
  logout: Auth;
  refreshAccessToken: Auth;
  removeTokenById: Token;
  signIn: Auth;
  signUp: Auth;
};


export type MutationCreateProfileArgs = {
  createProfileInput: CreateProfileInput;
};


export type MutationCreateTokenArgs = {
  createTokenInput: CreateTokenInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLogoutArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRefreshAccessTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRemoveTokenByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};

export type Profile = {
  __typename?: 'Profile';
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  findAllUsers: Array<User>;
  findByLogin: User;
};


export type QueryFindByLoginArgs = {
  createUserInput: CreateUserInput;
};

export type SignInInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Token = {
  __typename?: 'Token';
  fingerPrint?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  login: Scalars['String']['output'];
  password: Scalars['String']['output'];
  profile: Profile;
  tokens?: Maybe<Array<Maybe<Token>>>;
};

export type SignInMutationVariables = Exact<{
  signInInput: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Auth', accessToken?: string | null, refreshToken?: string | null, user?: { __typename?: 'User', login: string } | null } };


export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;