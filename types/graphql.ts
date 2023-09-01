import { GraphQLResolveInfo } from 'graphql';
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

export type Commit = {
  __typename?: 'Commit';
  date?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  commits?: Maybe<Array<Maybe<Commit>>>;
};


export type QueryCommitsArgs = {
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
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  RepositoryProperty: never;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Commit: ResolverTypeWrapper<Commit>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Repository: ResolverTypeWrapper<Repository>;
  RepositoryProperty: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['RepositoryProperty']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Commit: Commit;
  Float: Scalars['Float']['output'];
  Query: {};
  Repository: Repository;
  RepositoryProperty: ResolversInterfaceTypes<ResolversParentTypes>['RepositoryProperty'];
  String: Scalars['String']['output'];
};

export type CommitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Commit'] = ResolversParentTypes['Commit']> = {
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  commits?: Resolver<Maybe<Array<Maybe<ResolversTypes['Commit']>>>, ParentType, ContextType, RequireFields<QueryCommitsArgs, 'repository'>>;
};

export type RepositoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Repository'] = ResolversParentTypes['Repository']> = {
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
};

export type RepositoryPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['RepositoryProperty'] = ResolversParentTypes['RepositoryProperty']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Commit?: CommitResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Repository?: RepositoryResolvers<ContextType>;
  RepositoryProperty?: RepositoryPropertyResolvers<ContextType>;
};

