import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthenticationInfo = {
  token?: Maybe<Scalars['String']>,
};

export enum DayOfWeeks {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday'
}

export type Device = {
  id: Scalars['ID'],
};

export type GuardingAssignment = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  subscribers?: Maybe<Array<Maybe<GuardingAssignmentSubscriber>>>,
};


export type GuardingAssignmentSubscribersArgs = {
  where?: Maybe<SubscribersWhereInput>
};

export type GuardingAssignmentBySession = {
  morning: Array<Maybe<User>>,
  afternoon: Array<Maybe<User>>,
};

export type GuardingAssignmentRegistration = {
  id?: Maybe<Scalars['ID']>,
};

export type GuardingAssignmentSubscriber = {
  user?: Maybe<User>,
  session?: Maybe<Array<Maybe<Session>>>,
};

export type GuardingAssignmentWhereUniqueInput = {
  id: Scalars['ID'],
};

export type Mutation = {
  registerGuardingAssignment?: Maybe<GuardingAssignmentRegistration>,
  trucLab?: Maybe<Scalars['Boolean']>,
  createPost: Post,
  updatePost: Scalars['Boolean'],
  deletePost: Scalars['Boolean'],
  register?: Maybe<Scalars['Boolean']>,
  login?: Maybe<AuthenticationInfo>,
  facebookLogin?: Maybe<AuthenticationInfo>,
};


export type MutationRegisterGuardingAssignmentArgs = {
  day: DayOfWeeks,
  session?: Maybe<Array<Maybe<Session>>>
};


export type MutationTrucLabArgs = {
  day?: Maybe<DayOfWeeks>,
  session?: Maybe<Session>
};


export type MutationCreatePostArgs = {
  data: PostCreateInput
};


export type MutationUpdatePostArgs = {
  where: PostWhereUniqueInput,
  data: PostUpdateInput
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
};


export type MutationRegisterArgs = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  course: Scalars['Int']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationFacebookLoginArgs = {
  email: Scalars['String'],
  name: Scalars['String'],
  avatar: Scalars['String']
};

export type Post = {
  id: Scalars['ID'],
  title: Scalars['String'],
  thumnail?: Maybe<Scalars['String']>,
  content: Scalars['String'],
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type PostCreateInput = {
  title: Scalars['String'],
  content: Scalars['String'],
};

export type PostUpdateInput = {
  title: Scalars['String'],
  content: Scalars['String'],
};

export type PostWhereUniqueInput = {
  id: Scalars['ID'],
};

export type Query = {
  devices: Array<Device>,
  device?: Maybe<Device>,
  guardingAssignments: Array<GuardingAssignment>,
  guardingAssignment?: Maybe<GuardingAssignment>,
  posts: Array<Post>,
  post: Post,
  users: Array<User>,
  currentUser?: Maybe<AuthenticationInfo>,
};


export type QueryDeviceArgs = {
  id: Scalars['ID']
};


export type QueryGuardingAssignmentArgs = {
  where: GuardingAssignmentWhereUniqueInput
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput
};

export type Resource = {
  id: Scalars['ID'],
};

export enum Roles {
  User = 'user'
}

export enum Session {
  Sang = 'SANG',
  Chieu = 'CHIEU'
}

export type SubscribersWhereInput = {
  session?: Maybe<Array<Maybe<Session>>>,
};

export type User = {
  id: Scalars['ID'],
  fullName: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  roles: Array<Roles>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Device: ResolverTypeWrapper<Device>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  GuardingAssignment: ResolverTypeWrapper<GuardingAssignment>,
  String: ResolverTypeWrapper<Scalars['String']>,
  SubscribersWhereInput: SubscribersWhereInput,
  Session: Session,
  GuardingAssignmentSubscriber: ResolverTypeWrapper<GuardingAssignmentSubscriber>,
  User: ResolverTypeWrapper<User>,
  Roles: Roles,
  GuardingAssignmentWhereUniqueInput: GuardingAssignmentWhereUniqueInput,
  Post: ResolverTypeWrapper<Post>,
  PostWhereUniqueInput: PostWhereUniqueInput,
  AuthenticationInfo: ResolverTypeWrapper<AuthenticationInfo>,
  Mutation: ResolverTypeWrapper<{}>,
  DayOfWeeks: DayOfWeeks,
  GuardingAssignmentRegistration: ResolverTypeWrapper<GuardingAssignmentRegistration>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  PostCreateInput: PostCreateInput,
  PostUpdateInput: PostUpdateInput,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  GuardingAssignmentBySession: ResolverTypeWrapper<GuardingAssignmentBySession>,
  Resource: ResolverTypeWrapper<Resource>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Device: Device,
  ID: Scalars['ID'],
  GuardingAssignment: GuardingAssignment,
  String: Scalars['String'],
  SubscribersWhereInput: SubscribersWhereInput,
  Session: Session,
  GuardingAssignmentSubscriber: GuardingAssignmentSubscriber,
  User: User,
  Roles: Roles,
  GuardingAssignmentWhereUniqueInput: GuardingAssignmentWhereUniqueInput,
  Post: Post,
  PostWhereUniqueInput: PostWhereUniqueInput,
  AuthenticationInfo: AuthenticationInfo,
  Mutation: {},
  DayOfWeeks: DayOfWeeks,
  GuardingAssignmentRegistration: GuardingAssignmentRegistration,
  Boolean: Scalars['Boolean'],
  PostCreateInput: PostCreateInput,
  PostUpdateInput: PostUpdateInput,
  Int: Scalars['Int'],
  GuardingAssignmentBySession: GuardingAssignmentBySession,
  Resource: Resource,
};

export type AuthenticationInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AuthenticationInfo'] = ResolversParentTypes['AuthenticationInfo']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type DeviceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Device'] = ResolversParentTypes['Device']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type GuardingAssignmentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GuardingAssignment'] = ResolversParentTypes['GuardingAssignment']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  subscribers?: Resolver<Maybe<Array<Maybe<ResolversTypes['GuardingAssignmentSubscriber']>>>, ParentType, ContextType, GuardingAssignmentSubscribersArgs>,
};

export type GuardingAssignmentBySessionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GuardingAssignmentBySession'] = ResolversParentTypes['GuardingAssignmentBySession']> = {
  morning?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>,
  afternoon?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>,
};

export type GuardingAssignmentRegistrationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GuardingAssignmentRegistration'] = ResolversParentTypes['GuardingAssignmentRegistration']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
};

export type GuardingAssignmentSubscriberResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GuardingAssignmentSubscriber'] = ResolversParentTypes['GuardingAssignmentSubscriber']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  session?: Resolver<Maybe<Array<Maybe<ResolversTypes['Session']>>>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  registerGuardingAssignment?: Resolver<Maybe<ResolversTypes['GuardingAssignmentRegistration']>, ParentType, ContextType, RequireFields<MutationRegisterGuardingAssignmentArgs, 'day'>>,
  trucLab?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, MutationTrucLabArgs>,
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'data'>>,
  updatePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'where' | 'data'>>,
  deletePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'where'>>,
  register?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'name' | 'email' | 'password' | 'course'>>,
  login?: Resolver<Maybe<ResolversTypes['AuthenticationInfo']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>,
  facebookLogin?: Resolver<Maybe<ResolversTypes['AuthenticationInfo']>, ParentType, ContextType, RequireFields<MutationFacebookLoginArgs, 'email' | 'name' | 'avatar'>>,
};

export type PostResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  thumnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  devices?: Resolver<Array<ResolversTypes['Device']>, ParentType, ContextType>,
  device?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType, RequireFields<QueryDeviceArgs, 'id'>>,
  guardingAssignments?: Resolver<Array<ResolversTypes['GuardingAssignment']>, ParentType, ContextType>,
  guardingAssignment?: Resolver<Maybe<ResolversTypes['GuardingAssignment']>, ParentType, ContextType, RequireFields<QueryGuardingAssignmentArgs, 'where'>>,
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>,
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<QueryPostArgs, 'where'>>,
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
  currentUser?: Resolver<Maybe<ResolversTypes['AuthenticationInfo']>, ParentType, ContextType>,
};

export type ResourceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  roles?: Resolver<Array<ResolversTypes['Roles']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = Context> = {
  AuthenticationInfo?: AuthenticationInfoResolvers<ContextType>,
  Device?: DeviceResolvers<ContextType>,
  GuardingAssignment?: GuardingAssignmentResolvers<ContextType>,
  GuardingAssignmentBySession?: GuardingAssignmentBySessionResolvers<ContextType>,
  GuardingAssignmentRegistration?: GuardingAssignmentRegistrationResolvers<ContextType>,
  GuardingAssignmentSubscriber?: GuardingAssignmentSubscriberResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Post?: PostResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Resource?: ResourceResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
