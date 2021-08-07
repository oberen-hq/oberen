import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  OauthConnection: crudResolvers.OauthConnectionCrudResolver,
  TokenPair: crudResolvers.TokenPairCrudResolver,
  User: crudResolvers.UserCrudResolver,
  UserProfile: crudResolvers.UserProfileCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  PostComment: crudResolvers.PostCommentCrudResolver,
  Label: crudResolvers.LabelCrudResolver
};
const relationResolversMap = {
  OauthConnection: relationResolvers.OauthConnectionRelationsResolver,
  TokenPair: relationResolvers.TokenPairRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  UserProfile: relationResolvers.UserProfileRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  PostComment: relationResolvers.PostCommentRelationsResolver,
  Label: relationResolvers.LabelRelationsResolver
};
const actionResolversMap = {
  OauthConnection: {
    oauthConnection: actionResolvers.FindUniqueOauthConnectionResolver,
    findFirstOauthConnection: actionResolvers.FindFirstOauthConnectionResolver,
    oauthConnections: actionResolvers.FindManyOauthConnectionResolver,
    createOauthConnection: actionResolvers.CreateOauthConnectionResolver,
    createManyOauthConnection: actionResolvers.CreateManyOauthConnectionResolver,
    deleteOauthConnection: actionResolvers.DeleteOauthConnectionResolver,
    updateOauthConnection: actionResolvers.UpdateOauthConnectionResolver,
    deleteManyOauthConnection: actionResolvers.DeleteManyOauthConnectionResolver,
    updateManyOauthConnection: actionResolvers.UpdateManyOauthConnectionResolver,
    upsertOauthConnection: actionResolvers.UpsertOauthConnectionResolver,
    aggregateOauthConnection: actionResolvers.AggregateOauthConnectionResolver,
    groupByOauthConnection: actionResolvers.GroupByOauthConnectionResolver
  },
  TokenPair: {
    tokenPair: actionResolvers.FindUniqueTokenPairResolver,
    findFirstTokenPair: actionResolvers.FindFirstTokenPairResolver,
    tokenPairs: actionResolvers.FindManyTokenPairResolver,
    createTokenPair: actionResolvers.CreateTokenPairResolver,
    createManyTokenPair: actionResolvers.CreateManyTokenPairResolver,
    deleteTokenPair: actionResolvers.DeleteTokenPairResolver,
    updateTokenPair: actionResolvers.UpdateTokenPairResolver,
    deleteManyTokenPair: actionResolvers.DeleteManyTokenPairResolver,
    updateManyTokenPair: actionResolvers.UpdateManyTokenPairResolver,
    upsertTokenPair: actionResolvers.UpsertTokenPairResolver,
    aggregateTokenPair: actionResolvers.AggregateTokenPairResolver,
    groupByTokenPair: actionResolvers.GroupByTokenPairResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  UserProfile: {
    userProfile: actionResolvers.FindUniqueUserProfileResolver,
    findFirstUserProfile: actionResolvers.FindFirstUserProfileResolver,
    userProfiles: actionResolvers.FindManyUserProfileResolver,
    createUserProfile: actionResolvers.CreateUserProfileResolver,
    createManyUserProfile: actionResolvers.CreateManyUserProfileResolver,
    deleteUserProfile: actionResolvers.DeleteUserProfileResolver,
    updateUserProfile: actionResolvers.UpdateUserProfileResolver,
    deleteManyUserProfile: actionResolvers.DeleteManyUserProfileResolver,
    updateManyUserProfile: actionResolvers.UpdateManyUserProfileResolver,
    upsertUserProfile: actionResolvers.UpsertUserProfileResolver,
    aggregateUserProfile: actionResolvers.AggregateUserProfileResolver,
    groupByUserProfile: actionResolvers.GroupByUserProfileResolver
  },
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver
  },
  PostComment: {
    postComment: actionResolvers.FindUniquePostCommentResolver,
    findFirstPostComment: actionResolvers.FindFirstPostCommentResolver,
    postComments: actionResolvers.FindManyPostCommentResolver,
    createPostComment: actionResolvers.CreatePostCommentResolver,
    createManyPostComment: actionResolvers.CreateManyPostCommentResolver,
    deletePostComment: actionResolvers.DeletePostCommentResolver,
    updatePostComment: actionResolvers.UpdatePostCommentResolver,
    deleteManyPostComment: actionResolvers.DeleteManyPostCommentResolver,
    updateManyPostComment: actionResolvers.UpdateManyPostCommentResolver,
    upsertPostComment: actionResolvers.UpsertPostCommentResolver,
    aggregatePostComment: actionResolvers.AggregatePostCommentResolver,
    groupByPostComment: actionResolvers.GroupByPostCommentResolver
  },
  Label: {
    label: actionResolvers.FindUniqueLabelResolver,
    findFirstLabel: actionResolvers.FindFirstLabelResolver,
    labels: actionResolvers.FindManyLabelResolver,
    createLabel: actionResolvers.CreateLabelResolver,
    createManyLabel: actionResolvers.CreateManyLabelResolver,
    deleteLabel: actionResolvers.DeleteLabelResolver,
    updateLabel: actionResolvers.UpdateLabelResolver,
    deleteManyLabel: actionResolvers.DeleteManyLabelResolver,
    updateManyLabel: actionResolvers.UpdateManyLabelResolver,
    upsertLabel: actionResolvers.UpsertLabelResolver,
    aggregateLabel: actionResolvers.AggregateLabelResolver,
    groupByLabel: actionResolvers.GroupByLabelResolver
  }
};
const resolversInfo = {
  OauthConnection: ["oauthConnection", "findFirstOauthConnection", "oauthConnections", "createOauthConnection", "createManyOauthConnection", "deleteOauthConnection", "updateOauthConnection", "deleteManyOauthConnection", "updateManyOauthConnection", "upsertOauthConnection", "aggregateOauthConnection", "groupByOauthConnection"],
  TokenPair: ["tokenPair", "findFirstTokenPair", "tokenPairs", "createTokenPair", "createManyTokenPair", "deleteTokenPair", "updateTokenPair", "deleteManyTokenPair", "updateManyTokenPair", "upsertTokenPair", "aggregateTokenPair", "groupByTokenPair"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  UserProfile: ["userProfile", "findFirstUserProfile", "userProfiles", "createUserProfile", "createManyUserProfile", "deleteUserProfile", "updateUserProfile", "deleteManyUserProfile", "updateManyUserProfile", "upsertUserProfile", "aggregateUserProfile", "groupByUserProfile"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  PostComment: ["postComment", "findFirstPostComment", "postComments", "createPostComment", "createManyPostComment", "deletePostComment", "updatePostComment", "deleteManyPostComment", "updateManyPostComment", "upsertPostComment", "aggregatePostComment", "groupByPostComment"],
  Label: ["label", "findFirstLabel", "labels", "createLabel", "createManyLabel", "deleteLabel", "updateLabel", "deleteManyLabel", "updateManyLabel", "upsertLabel", "aggregateLabel", "groupByLabel"]
};
const relationResolversInfo = {
  OauthConnection: ["user"],
  TokenPair: ["user"],
  User: ["profile", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  UserProfile: ["user", "labels"],
  Post: ["likers", "comments", "creator"],
  PostComment: ["creator", "post", "likers"],
  Label: ["creator", "profile"]
};
const modelsInfo = {
  OauthConnection: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  TokenPair: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId"],
  User: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserProfile: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  Post: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostComment: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  Label: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"]
};
const inputsInfo = {
  OauthConnectionWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user", "userId"],
  OauthConnectionOrderByInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionWhereUniqueInput: ["id"],
  OauthConnectionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  TokenPairWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "accessToken", "refreshToken", "user", "userId"],
  TokenPairOrderByInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId"],
  TokenPairWhereUniqueInput: ["id", "accessToken", "refreshToken"],
  TokenPairScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "profileId", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  UserOrderByInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserWhereUniqueInput: ["id", "username", "email"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserProfileWhereInput: ["AND", "OR", "NOT", "id", "updatedAt", "user", "status", "avatarUrl", "bio", "labels"],
  UserProfileOrderByInput: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  UserProfileWhereUniqueInput: ["id"],
  UserProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "updatedAt", "status", "avatarUrl", "bio"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "creator", "creatorId"],
  PostOrderByInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostWhereUniqueInput: ["id"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostCommentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "body", "creator", "creatorId", "post", "postId", "edited", "likers", "likes"],
  PostCommentOrderByInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  PostCommentWhereUniqueInput: ["id"],
  PostCommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  LabelWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "uses", "creator", "creatorId", "profile", "profileId"],
  LabelOrderByInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  LabelWhereUniqueInput: ["id"],
  LabelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  OauthConnectionCreateInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user"],
  OauthConnectionUpdateInput: ["createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user"],
  OauthConnectionCreateManyInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionUpdateManyMutationInput: ["createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  TokenPairCreateInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "user"],
  TokenPairUpdateInput: ["createdAt", "updatedAt", "accessToken", "refreshToken", "user"],
  TokenPairCreateManyInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId"],
  TokenPairUpdateManyMutationInput: ["createdAt", "updatedAt", "accessToken", "refreshToken"],
  UserCreateInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  UserUpdateInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole"],
  UserProfileCreateInput: ["id", "updatedAt", "status", "avatarUrl", "bio", "user", "labels"],
  UserProfileUpdateInput: ["updatedAt", "status", "avatarUrl", "bio", "user", "labels"],
  UserProfileCreateManyInput: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  UserProfileUpdateManyMutationInput: ["updatedAt", "status", "avatarUrl", "bio"],
  PostCreateInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "creator"],
  PostUpdateInput: ["createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "creator"],
  PostCreateManyInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "description", "type"],
  PostCommentCreateInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "likers"],
  PostCommentUpdateInput: ["createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "likers"],
  PostCommentCreateManyInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  PostCommentUpdateManyMutationInput: ["createdAt", "updatedAt", "body", "edited", "likes"],
  LabelCreateInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creator", "profile"],
  LabelUpdateInput: ["createdAt", "updatedAt", "name", "description", "uses", "creator", "profile"],
  LabelCreateManyInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  LabelUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "description", "uses"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumConnectionServiceFilter: ["equals", "in", "notIn", "not"],
  BoolFilter: ["equals", "not"],
  UserRelationFilter: ["is", "isNot"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumConnectionServiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleNullableFilter: ["equals", "in", "notIn", "not"],
  UserProfileRelationFilter: ["is", "isNot"],
  PostListRelationFilter: ["every", "some", "none"],
  PostCommentListRelationFilter: ["every", "some", "none"],
  LabelListRelationFilter: ["every", "some", "none"],
  OauthConnectionListRelationFilter: ["every", "some", "none"],
  TokenPairListRelationFilter: ["every", "some", "none"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRoleNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumStatusFilter: ["equals", "in", "notIn", "not"],
  EnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumPostTypeFilter: ["equals", "in", "notIn", "not"],
  UserListRelationFilter: ["every", "some", "none"],
  EnumPostTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PostRelationFilter: ["is", "isNot"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserCreateNestedOneWithoutOauthConnectionsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EnumConnectionServiceFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutOauthConnectionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutTokensInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutTokensInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCommentCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  PostCommentCreateNestedManyWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  LabelCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  OauthConnectionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  TokenPairCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableEnumRoleFieldUpdateOperationsInput: ["set"],
  UserProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  PostUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  LabelUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  OauthConnectionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  TokenPairUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  LabelCreateNestedManyWithoutProfileInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  LabelUpdateManyWithoutProfileInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedManyWithoutLikedPostsInput: ["create", "connectOrCreate", "connect"],
  PostCommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  EnumPostTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutLikedPostsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCreatedCommentsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutLikedCommentsInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutCreatedCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateManyWithoutLikedCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCreatedLabelsInput: ["create", "connectOrCreate", "connect"],
  UserProfileCreateNestedOneWithoutLabelsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCreatedLabelsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserProfileUpdateOneWithoutLabelsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumConnectionServiceFilter: ["equals", "in", "notIn", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumConnectionServiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleNullableFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumPostTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumPostTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserCreateWithoutOauthConnectionsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "tokens"],
  UserCreateOrConnectWithoutOauthConnectionsInput: ["where", "create"],
  UserUpsertWithoutOauthConnectionsInput: ["update", "create"],
  UserUpdateWithoutOauthConnectionsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "tokens"],
  UserCreateWithoutTokensInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections"],
  UserCreateOrConnectWithoutTokensInput: ["where", "create"],
  UserUpsertWithoutTokensInput: ["update", "create"],
  UserUpdateWithoutTokensInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections"],
  UserProfileCreateWithoutUserInput: ["id", "updatedAt", "status", "avatarUrl", "bio", "labels"],
  UserProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  PostCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likers", "comments"],
  PostCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostCreateManyCreatorInputEnvelope: ["data"],
  PostCommentCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "post", "likers"],
  PostCommentCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostCommentCreateManyCreatorInputEnvelope: ["data"],
  PostCreateWithoutLikersInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "comments", "creator"],
  PostCreateOrConnectWithoutLikersInput: ["where", "create"],
  PostCommentCreateWithoutLikersInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "post"],
  PostCommentCreateOrConnectWithoutLikersInput: ["where", "create"],
  LabelCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "profile"],
  LabelCreateOrConnectWithoutCreatorInput: ["where", "create"],
  LabelCreateManyCreatorInputEnvelope: ["data"],
  OauthConnectionCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionCreateOrConnectWithoutUserInput: ["where", "create"],
  OauthConnectionCreateManyUserInputEnvelope: ["data"],
  TokenPairCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken"],
  TokenPairCreateOrConnectWithoutUserInput: ["where", "create"],
  TokenPairCreateManyUserInputEnvelope: ["data"],
  UserProfileUpsertWithoutUserInput: ["update", "create"],
  UserProfileUpdateWithoutUserInput: ["updatedAt", "status", "avatarUrl", "bio", "labels"],
  PostUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostCommentUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostCommentScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  PostUpsertWithWhereUniqueWithoutLikersInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutLikersInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutLikersInput: ["where", "data"],
  PostCommentUpsertWithWhereUniqueWithoutLikersInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutLikersInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutLikersInput: ["where", "data"],
  LabelUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  LabelUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  LabelUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  LabelScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  OauthConnectionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  OauthConnectionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  OauthConnectionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  OauthConnectionScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  TokenPairUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  TokenPairUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  TokenPairUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  TokenPairScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId"],
  UserCreateWithoutProfileInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  LabelCreateWithoutProfileInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creator"],
  LabelCreateOrConnectWithoutProfileInput: ["where", "create"],
  LabelCreateManyProfileInputEnvelope: ["data"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "posts", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  LabelUpsertWithWhereUniqueWithoutProfileInput: ["where", "update", "create"],
  LabelUpdateWithWhereUniqueWithoutProfileInput: ["where", "data"],
  LabelUpdateManyWithWhereWithoutProfileInput: ["where", "data"],
  UserCreateWithoutLikedPostsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutLikedPostsInput: ["where", "create"],
  PostCommentCreateWithoutPostInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "likers"],
  PostCommentCreateOrConnectWithoutPostInput: ["where", "create"],
  PostCommentCreateManyPostInputEnvelope: ["data"],
  UserCreateWithoutPostsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutLikedPostsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedPostsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedPostsInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  PostCommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "createdComments", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  UserCreateWithoutCreatedCommentsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutCreatedCommentsInput: ["where", "create"],
  PostCreateWithoutCommentsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likers", "creator"],
  PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserCreateWithoutLikedCommentsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "createdLabels", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutLikedCommentsInput: ["where", "create"],
  UserUpsertWithoutCreatedCommentsInput: ["update", "create"],
  UserUpdateWithoutCreatedCommentsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  PostUpsertWithoutCommentsInput: ["update", "create"],
  PostUpdateWithoutCommentsInput: ["createdAt", "updatedAt", "title", "description", "type", "likers", "creator"],
  UserUpsertWithWhereUniqueWithoutLikedCommentsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedCommentsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedCommentsInput: ["where", "data"],
  UserCreateWithoutCreatedLabelsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutCreatedLabelsInput: ["where", "create"],
  UserProfileCreateWithoutLabelsInput: ["id", "updatedAt", "status", "avatarUrl", "bio", "user"],
  UserProfileCreateOrConnectWithoutLabelsInput: ["where", "create"],
  UserUpsertWithoutCreatedLabelsInput: ["update", "create"],
  UserUpdateWithoutCreatedLabelsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "oauthConnections", "tokens"],
  UserProfileUpsertWithoutLabelsInput: ["update", "create"],
  UserProfileUpdateWithoutLabelsInput: ["updatedAt", "status", "avatarUrl", "bio", "user"],
  PostCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "title", "description", "type"],
  PostCommentCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "body", "postId", "edited", "likes"],
  LabelCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "profileId"],
  OauthConnectionCreateManyUserInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  TokenPairCreateManyUserInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken"],
  PostUpdateWithoutCreatorInput: ["createdAt", "updatedAt", "title", "description", "type", "likers", "comments"],
  PostCommentUpdateWithoutCreatorInput: ["createdAt", "updatedAt", "body", "edited", "likes", "post", "likers"],
  PostUpdateWithoutLikersInput: ["createdAt", "updatedAt", "title", "description", "type", "comments", "creator"],
  PostCommentUpdateWithoutLikersInput: ["createdAt", "updatedAt", "body", "edited", "likes", "creator", "post"],
  LabelUpdateWithoutCreatorInput: ["createdAt", "updatedAt", "name", "description", "uses", "profile"],
  OauthConnectionUpdateWithoutUserInput: ["createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  TokenPairUpdateWithoutUserInput: ["createdAt", "updatedAt", "accessToken", "refreshToken"],
  LabelCreateManyProfileInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId"],
  LabelUpdateWithoutProfileInput: ["createdAt", "updatedAt", "name", "description", "uses", "creator"],
  PostCommentCreateManyPostInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "edited", "likes"],
  UserUpdateWithoutLikedPostsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedComments", "createdLabels", "oauthConnections", "tokens"],
  PostCommentUpdateWithoutPostInput: ["createdAt", "updatedAt", "body", "edited", "likes", "creator", "likers"],
  UserUpdateWithoutLikedCommentsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "createdLabels", "oauthConnections", "tokens"]
};
const outputsInfo = {
  AggregateOauthConnection: ["_count", "_min", "_max"],
  OauthConnectionGroupBy: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId", "_count", "_min", "_max"],
  AggregateTokenPair: ["_count", "_min", "_max"],
  TokenPairGroupBy: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId", "_count", "_min", "_max"],
  AggregateUserProfile: ["_count", "_min", "_max"],
  UserProfileGroupBy: ["id", "updatedAt", "status", "avatarUrl", "bio", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId", "_count", "_min", "_max"],
  AggregatePostComment: ["_count", "_avg", "_sum", "_min", "_max"],
  PostCommentGroupBy: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateLabel: ["_count", "_avg", "_sum", "_min", "_max"],
  LabelGroupBy: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  OauthConnectionCountAggregate: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId", "_all"],
  OauthConnectionMinAggregate: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionMaxAggregate: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  TokenPairCountAggregate: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "_all"],
  TokenPairMinAggregate: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId"],
  TokenPairMaxAggregate: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId", "_all"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserProfileCountAggregate: ["id", "updatedAt", "status", "avatarUrl", "bio", "_all"],
  UserProfileMinAggregate: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  UserProfileMaxAggregate: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId", "_all"],
  PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostCommentCountAggregate: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes", "_all"],
  PostCommentAvgAggregate: ["likes"],
  PostCommentSumAggregate: ["likes"],
  PostCommentMinAggregate: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  PostCommentMaxAggregate: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  LabelCountAggregate: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId", "_all"],
  LabelAvgAggregate: ["uses"],
  LabelSumAggregate: ["uses"],
  LabelMinAggregate: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  LabelMaxAggregate: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"]
};
const argsInfo = {
  FindUniqueOauthConnectionArgs: ["where"],
  FindFirstOauthConnectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOauthConnectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOauthConnectionArgs: ["data"],
  CreateManyOauthConnectionArgs: ["data"],
  DeleteOauthConnectionArgs: ["where"],
  UpdateOauthConnectionArgs: ["data", "where"],
  DeleteManyOauthConnectionArgs: ["where"],
  UpdateManyOauthConnectionArgs: ["data", "where"],
  UpsertOauthConnectionArgs: ["where", "create", "update"],
  AggregateOauthConnectionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOauthConnectionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTokenPairArgs: ["where"],
  FindFirstTokenPairArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTokenPairArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTokenPairArgs: ["data"],
  CreateManyTokenPairArgs: ["data"],
  DeleteTokenPairArgs: ["where"],
  UpdateTokenPairArgs: ["data", "where"],
  DeleteManyTokenPairArgs: ["where"],
  UpdateManyTokenPairArgs: ["data", "where"],
  UpsertTokenPairArgs: ["where", "create", "update"],
  AggregateTokenPairArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTokenPairArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserProfileArgs: ["where"],
  FindFirstUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserProfileArgs: ["data"],
  CreateManyUserProfileArgs: ["data"],
  DeleteUserProfileArgs: ["where"],
  UpdateUserProfileArgs: ["data", "where"],
  DeleteManyUserProfileArgs: ["where"],
  UpdateManyUserProfileArgs: ["data", "where"],
  UpsertUserProfileArgs: ["where", "create", "update"],
  AggregateUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  CreateManyPostArgs: ["data"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostCommentArgs: ["where"],
  FindFirstPostCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostCommentArgs: ["data"],
  CreateManyPostCommentArgs: ["data"],
  DeletePostCommentArgs: ["where"],
  UpdatePostCommentArgs: ["data", "where"],
  DeleteManyPostCommentArgs: ["where"],
  UpdateManyPostCommentArgs: ["data", "where"],
  UpsertPostCommentArgs: ["where", "create", "update"],
  AggregatePostCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueLabelArgs: ["where"],
  FindFirstLabelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyLabelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateLabelArgs: ["data"],
  CreateManyLabelArgs: ["data"],
  DeleteLabelArgs: ["where"],
  UpdateLabelArgs: ["data", "where"],
  DeleteManyLabelArgs: ["where"],
  UpdateManyLabelArgs: ["data", "where"],
  UpsertLabelArgs: ["where", "create", "update"],
  AggregateLabelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByLabelArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







