import { GraphQLResolveInfo } from 'graphql';
import { ApolloContext } from '../backend/index';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  user?: Maybe<User>;
};

export type Avatar = {
  __typename?: 'Avatar';
  href?: Maybe<Scalars['String']['output']>;
};

export type Commit = {
  __typename?: 'Commit';
  author?: Maybe<Author>;
  date?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PackageDiff = {
  __typename?: 'PackageDiff';
  currentVersion?: Maybe<Scalars['String']['output']>;
  latestVersion?: Maybe<Scalars['String']['output']>;
  packageName?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  availableDependencyUpgrades?: Maybe<Array<Maybe<PackageDiff>>>;
  commits?: Maybe<Array<Maybe<Commit>>>;
  currentCommitOnAlpha?: Maybe<Commit>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};


export type QueryAvailableDependencyUpgradesArgs = {
  repository: Scalars['String']['input'];
};


export type QueryCommitsArgs = {
  repository: Scalars['String']['input'];
};


export type QueryCurrentCommitOnAlphaArgs = {
  repository: Scalars['String']['input'];
};


export type QueryTagsArgs = {
  repository: Scalars['String']['input'];
};

export type Repository = {
  __typename?: 'Repository';
  created_on?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fork_policy?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  has_issues?: Maybe<Scalars['Boolean']['output']>;
  has_wiki?: Maybe<Scalars['Boolean']['output']>;
  is_private?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<RepositoryProperty>;
  project?: Maybe<RepositoryProperty>;
  scm?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_on?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<RepositoryProperty>;
};

export type RepositoryProperty = {
  type?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  date?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Commit>;
};

export type User = {
  __typename?: 'User';
  links?: Maybe<UserLinks>;
  nickname?: Maybe<Scalars['String']['output']>;
};

export type UserLinks = {
  __typename?: 'UserLinks';
  avatar?: Maybe<Avatar>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  RepositoryProperty: never;
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Author: ResolverTypeWrapper<Author>;
  Avatar: ResolverTypeWrapper<Avatar>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Commit: ResolverTypeWrapper<Commit>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  PackageDiff: ResolverTypeWrapper<PackageDiff>;
  Query: ResolverTypeWrapper<{}>;
  Repository: ResolverTypeWrapper<Repository>;
  RepositoryProperty: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['RepositoryProperty']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tag: ResolverTypeWrapper<Tag>;
  User: ResolverTypeWrapper<User>;
  UserLinks: ResolverTypeWrapper<UserLinks>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Author: Author;
  Avatar: Avatar;
  Boolean: Scalars['Boolean']['output'];
  Commit: Commit;
  Float: Scalars['Float']['output'];
  PackageDiff: PackageDiff;
  Query: {};
  Repository: Repository;
  RepositoryProperty: ResolversInterfaceTypes<ResolversParentTypes>['RepositoryProperty'];
  String: Scalars['String']['output'];
  Tag: Tag;
  User: User;
  UserLinks: UserLinks;
}>;

export type AuthorResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AvatarResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Avatar'] = ResolversParentTypes['Avatar']> = ResolversObject<{
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommitResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Commit'] = ResolversParentTypes['Commit']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PackageDiffResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PackageDiff'] = ResolversParentTypes['PackageDiff']> = ResolversObject<{
  currentVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latestVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  packageName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  availableDependencyUpgrades?: Resolver<Maybe<Array<Maybe<ResolversTypes['PackageDiff']>>>, ParentType, ContextType, RequireFields<QueryAvailableDependencyUpgradesArgs, 'repository'>>;
  commits?: Resolver<Maybe<Array<Maybe<ResolversTypes['Commit']>>>, ParentType, ContextType, RequireFields<QueryCommitsArgs, 'repository'>>;
  currentCommitOnAlpha?: Resolver<Maybe<ResolversTypes['Commit']>, ParentType, ContextType, RequireFields<QueryCurrentCommitOnAlphaArgs, 'repository'>>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<QueryTagsArgs, 'repository'>>;
}>;

export type RepositoryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Repository'] = ResolversParentTypes['Repository']> = ResolversObject<{
  created_on?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fork_policy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  has_issues?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_wiki?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['RepositoryProperty']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['RepositoryProperty']>, ParentType, ContextType>;
  scm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_on?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workspace?: Resolver<Maybe<ResolversTypes['RepositoryProperty']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RepositoryPropertyResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['RepositoryProperty'] = ResolversParentTypes['RepositoryProperty']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Commit']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  links?: Resolver<Maybe<ResolversTypes['UserLinks']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserLinksResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['UserLinks'] = ResolversParentTypes['UserLinks']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['Avatar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Author?: AuthorResolvers<ContextType>;
  Avatar?: AvatarResolvers<ContextType>;
  Commit?: CommitResolvers<ContextType>;
  PackageDiff?: PackageDiffResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Repository?: RepositoryResolvers<ContextType>;
  RepositoryProperty?: RepositoryPropertyResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserLinks?: UserLinksResolvers<ContextType>;
}>;

