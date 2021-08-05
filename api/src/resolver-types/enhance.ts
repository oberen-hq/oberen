import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  UserProfile: crudResolvers.UserProfileCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  PostComment: crudResolvers.PostCommentCrudResolver
};
const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  UserProfile: relationResolvers.UserProfileRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  PostComment: relationResolvers.PostCommentRelationsResolver
};
const actionResolversMap = {
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
  }
};
const resolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  UserProfile: ["userProfile", "findFirstUserProfile", "userProfiles", "createUserProfile", "createManyUserProfile", "deleteUserProfile", "updateUserProfile", "deleteManyUserProfile", "updateManyUserProfile", "upsertUserProfile", "aggregateUserProfile", "groupByUserProfile"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  PostComment: ["postComment", "findFirstPostComment", "postComments", "createPostComment", "createManyPostComment", "deletePostComment", "updatePostComment", "deleteManyPostComment", "updateManyPostComment", "upsertPostComment", "aggregatePostComment", "groupByPostComment"]
};
const relationResolversInfo = {
  User: ["profile", "posts", "likedPosts", "likedComments", "PostComment", "Post"],
  UserProfile: ["user"],
  Post: ["likers", "comments", "creator", "User"],
  PostComment: ["creator", "post", "likers"]
};
const modelsInfo = {
  User: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId", "postId"],
  UserProfile: ["id", "updatedAt", "userId", "avatarUrl", "bio"],
  Post: ["id", "title", "description", "type", "creatorId", "createdAt", "updatedAt", "userId"],
  PostComment: ["id", "body", "creatorId", "postId", "createdAt", "updatedAt", "edited", "likes"]
};
const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "profileId", "posts", "likedPosts", "likedComments", "PostComment", "Post", "postId"],
  UserOrderByInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId", "postId"],
  UserWhereUniqueInput: ["id", "username", "email"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId", "postId"],
  UserProfileWhereInput: ["AND", "OR", "NOT", "id", "updatedAt", "user", "userId", "avatarUrl", "bio"],
  UserProfileOrderByInput: ["id", "updatedAt", "userId", "avatarUrl", "bio"],
  UserProfileWhereUniqueInput: ["id"],
  UserProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "updatedAt", "userId", "avatarUrl", "bio"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "type", "likers", "comments", "creator", "creatorId", "createdAt", "updatedAt", "User", "userId"],
  PostOrderByInput: ["id", "title", "description", "type", "creatorId", "createdAt", "updatedAt", "userId"],
  PostWhereUniqueInput: ["id"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "type", "creatorId", "createdAt", "updatedAt", "userId"],
  PostCommentWhereInput: ["AND", "OR", "NOT", "id", "body", "creator", "creatorId", "post", "postId", "createdAt", "updatedAt", "edited", "likers", "likes"],
  PostCommentOrderByInput: ["id", "body", "creatorId", "postId", "createdAt", "updatedAt", "edited", "likes"],
  PostCommentWhereUniqueInput: ["id"],
  PostCommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "body", "creatorId", "postId", "createdAt", "updatedAt", "edited", "likes"],
  UserCreateInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "PostComment", "Post"],
  UserUpdateInput: ["createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "PostComment", "Post"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId", "postId"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "username", "email", "password", "userRole"],
  UserProfileCreateInput: ["id", "updatedAt", "userId", "avatarUrl", "bio", "user"],
  UserProfileUpdateInput: ["updatedAt", "userId", "avatarUrl", "bio", "user"],
  UserProfileCreateManyInput: ["id", "updatedAt", "userId", "avatarUrl", "bio"],
  UserProfileUpdateManyMutationInput: ["updatedAt", "userId", "avatarUrl", "bio"],
  PostCreateInput: ["id", "title", "description", "type", "createdAt", "updatedAt", "likers", "comments", "creator", "User"],
  PostUpdateInput: ["title", "description", "type", "createdAt", "updatedAt", "likers", "comments", "creator", "User"],
  PostCreateManyInput: ["id", "title", "description", "type", "creatorId", "createdAt", "updatedAt", "userId"],
  PostUpdateManyMutationInput: ["title", "description", "type", "createdAt", "updatedAt"],
  PostCommentCreateInput: ["id", "body", "createdAt", "updatedAt", "edited", "likes", "creator", "post", "likers"],
  PostCommentUpdateInput: ["body", "createdAt", "updatedAt", "edited", "likes", "creator", "post", "likers"],
  PostCommentCreateManyInput: ["id", "body", "creatorId", "postId", "createdAt", "updatedAt", "edited", "likes"],
  PostCommentUpdateManyMutationInput: ["body", "createdAt", "updatedAt", "edited", "likes"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumRoleNullableFilter: ["equals", "in", "notIn", "not"],
  UserProfileRelationFilter: ["is", "isNot"],
  PostListRelationFilter: ["every", "some", "none"],
  PostCommentListRelationFilter: ["every", "some", "none"],
  PostRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumRoleNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  EnumPostTypeFilter: ["equals", "in", "notIn", "not"],
  UserListRelationFilter: ["every", "some", "none"],
  EnumPostTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCommentCreateNestedManyWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  PostCommentCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedOneWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableEnumRoleFieldUpdateOperationsInput: ["set"],
  UserProfileUpdateOneRequiredWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateOneWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutLikedPostsInput: ["create", "connectOrCreate", "connect"],
  EnumPostTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneWithoutLikedPostsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserCreateNestedOneWithoutPostCommentInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutLikedCommentsInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutPostCommentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateManyWithoutLikedCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleNullableFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumRoleNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumPostTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumPostTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserProfileCreateWithoutUserInput: ["id", "updatedAt", "userId", "avatarUrl", "bio"],
  UserProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  PostCreateWithoutCreatorInput: ["id", "title", "description", "type", "createdAt", "updatedAt", "likers", "comments", "User"],
  PostCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostCreateManyCreatorInputEnvelope: ["data"],
  PostCreateWithoutUserInput: ["id", "title", "description", "type", "createdAt", "updatedAt", "likers", "comments", "creator"],
  PostCreateOrConnectWithoutUserInput: ["where", "create"],
  PostCreateManyUserInputEnvelope: ["data"],
  PostCommentCreateWithoutLikersInput: ["id", "body", "createdAt", "updatedAt", "edited", "likes", "creator", "post"],
  PostCommentCreateOrConnectWithoutLikersInput: ["where", "create"],
  PostCommentCreateWithoutCreatorInput: ["id", "body", "createdAt", "updatedAt", "edited", "likes", "post", "likers"],
  PostCommentCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostCommentCreateManyCreatorInputEnvelope: ["data"],
  PostCreateWithoutLikersInput: ["id", "title", "description", "type", "createdAt", "updatedAt", "comments", "creator", "User"],
  PostCreateOrConnectWithoutLikersInput: ["where", "create"],
  UserProfileUpsertWithoutUserInput: ["update", "create"],
  UserProfileUpdateWithoutUserInput: ["updatedAt", "userId", "avatarUrl", "bio"],
  PostUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "type", "creatorId", "createdAt", "updatedAt", "userId"],
  PostUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PostCommentUpsertWithWhereUniqueWithoutLikersInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutLikersInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutLikersInput: ["where", "data"],
  PostCommentScalarWhereInput: ["AND", "OR", "NOT", "id", "body", "creatorId", "postId", "createdAt", "updatedAt", "edited", "likes"],
  PostCommentUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostUpsertWithoutLikersInput: ["update", "create"],
  PostUpdateWithoutLikersInput: ["title", "description", "type", "createdAt", "updatedAt", "comments", "creator", "User"],
  UserCreateWithoutProfileInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "posts", "likedPosts", "likedComments", "PostComment", "Post"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["createdAt", "updatedAt", "username", "email", "password", "userRole", "posts", "likedPosts", "likedComments", "PostComment", "Post"],
  UserCreateWithoutPostInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "PostComment"],
  UserCreateOrConnectWithoutPostInput: ["where", "create"],
  UserCreateManyPostInputEnvelope: ["data"],
  PostCommentCreateWithoutPostInput: ["id", "body", "createdAt", "updatedAt", "edited", "likes", "creator", "likers"],
  PostCommentCreateOrConnectWithoutPostInput: ["where", "create"],
  PostCommentCreateManyPostInputEnvelope: ["data"],
  UserCreateWithoutPostsInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "likedPosts", "likedComments", "PostComment", "Post"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserCreateWithoutLikedPostsInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedComments", "PostComment", "Post"],
  UserCreateOrConnectWithoutLikedPostsInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId", "postId"],
  PostCommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "likedPosts", "likedComments", "PostComment", "Post"],
  UserUpsertWithoutLikedPostsInput: ["update", "create"],
  UserUpdateWithoutLikedPostsInput: ["createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedComments", "PostComment", "Post"],
  UserCreateWithoutPostCommentInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "Post"],
  UserCreateOrConnectWithoutPostCommentInput: ["where", "create"],
  PostCreateWithoutCommentsInput: ["id", "title", "description", "type", "createdAt", "updatedAt", "likers", "creator", "User"],
  PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserCreateWithoutLikedCommentsInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedPosts", "PostComment", "Post"],
  UserCreateOrConnectWithoutLikedCommentsInput: ["where", "create"],
  UserUpsertWithoutPostCommentInput: ["update", "create"],
  UserUpdateWithoutPostCommentInput: ["createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "Post"],
  PostUpsertWithoutCommentsInput: ["update", "create"],
  PostUpdateWithoutCommentsInput: ["title", "description", "type", "createdAt", "updatedAt", "likers", "creator", "User"],
  UserUpsertWithWhereUniqueWithoutLikedCommentsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedCommentsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedCommentsInput: ["where", "data"],
  PostCreateManyCreatorInput: ["id", "title", "description", "type", "createdAt", "updatedAt", "userId"],
  PostCreateManyUserInput: ["id", "title", "description", "type", "creatorId", "createdAt", "updatedAt"],
  PostCommentCreateManyCreatorInput: ["id", "body", "postId", "createdAt", "updatedAt", "edited", "likes"],
  PostUpdateWithoutCreatorInput: ["title", "description", "type", "createdAt", "updatedAt", "likers", "comments", "User"],
  PostUpdateWithoutUserInput: ["title", "description", "type", "createdAt", "updatedAt", "likers", "comments", "creator"],
  PostCommentUpdateWithoutLikersInput: ["body", "createdAt", "updatedAt", "edited", "likes", "creator", "post"],
  PostCommentUpdateWithoutCreatorInput: ["body", "createdAt", "updatedAt", "edited", "likes", "post", "likers"],
  UserCreateManyPostInput: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId"],
  PostCommentCreateManyPostInput: ["id", "body", "creatorId", "createdAt", "updatedAt", "edited", "likes"],
  UserUpdateWithoutPostInput: ["createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "PostComment"],
  PostCommentUpdateWithoutPostInput: ["body", "createdAt", "updatedAt", "edited", "likes", "creator", "likers"],
  UserUpdateWithoutLikedCommentsInput: ["createdAt", "updatedAt", "username", "email", "password", "userRole", "profile", "posts", "likedPosts", "PostComment", "Post"]
};
const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId", "postId", "_count", "_min", "_max"],
  AggregateUserProfile: ["_count", "_min", "_max"],
  UserProfileGroupBy: ["id", "updatedAt", "userId", "avatarUrl", "bio", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["id", "title", "description", "type", "creatorId", "createdAt", "updatedAt", "userId", "_count", "_min", "_max"],
  AggregatePostComment: ["_count", "_avg", "_sum", "_min", "_max"],
  PostCommentGroupBy: ["id", "body", "creatorId", "postId", "createdAt", "updatedAt", "edited", "likes", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId", "postId", "_all"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId", "postId"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "username", "email", "password", "userRole", "profileId", "postId"],
  UserProfileCountAggregate: ["id", "updatedAt", "userId", "avatarUrl", "bio", "_all"],
  UserProfileMinAggregate: ["id", "updatedAt", "userId", "avatarUrl", "bio"],
  UserProfileMaxAggregate: ["id", "updatedAt", "userId", "avatarUrl", "bio"],
  PostCountAggregate: ["id", "title", "description", "type", "creatorId", "createdAt", "updatedAt", "userId", "_all"],
  PostMinAggregate: ["id", "title", "description", "type", "creatorId", "createdAt", "updatedAt", "userId"],
  PostMaxAggregate: ["id", "title", "description", "type", "creatorId", "createdAt", "updatedAt", "userId"],
  PostCommentCountAggregate: ["id", "body", "creatorId", "postId", "createdAt", "updatedAt", "edited", "likes", "_all"],
  PostCommentAvgAggregate: ["likes"],
  PostCommentSumAggregate: ["likes"],
  PostCommentMinAggregate: ["id", "body", "creatorId", "postId", "createdAt", "updatedAt", "edited", "likes"],
  PostCommentMaxAggregate: ["id", "body", "creatorId", "postId", "createdAt", "updatedAt", "edited", "likes"]
};
const argsInfo = {
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
  GroupByPostCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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







