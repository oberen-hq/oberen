import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Attachment: crudResolvers.AttachmentCrudResolver,
  Hashtag: crudResolvers.HashtagCrudResolver,
  Label: crudResolvers.LabelCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  PostComment: crudResolvers.PostCommentCrudResolver,
  User: crudResolvers.UserCrudResolver,
  UserProfile: crudResolvers.UserProfileCrudResolver
};
const relationResolversMap = {
  Attachment: relationResolvers.AttachmentRelationsResolver,
  Hashtag: relationResolvers.HashtagRelationsResolver,
  Label: relationResolvers.LabelRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  PostComment: relationResolvers.PostCommentRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  UserProfile: relationResolvers.UserProfileRelationsResolver
};
const actionResolversMap = {
  Attachment: {
    attachment: actionResolvers.FindUniqueAttachmentResolver,
    findFirstAttachment: actionResolvers.FindFirstAttachmentResolver,
    attachments: actionResolvers.FindManyAttachmentResolver,
    createAttachment: actionResolvers.CreateAttachmentResolver,
    createManyAttachment: actionResolvers.CreateManyAttachmentResolver,
    deleteAttachment: actionResolvers.DeleteAttachmentResolver,
    updateAttachment: actionResolvers.UpdateAttachmentResolver,
    deleteManyAttachment: actionResolvers.DeleteManyAttachmentResolver,
    updateManyAttachment: actionResolvers.UpdateManyAttachmentResolver,
    upsertAttachment: actionResolvers.UpsertAttachmentResolver,
    aggregateAttachment: actionResolvers.AggregateAttachmentResolver,
    groupByAttachment: actionResolvers.GroupByAttachmentResolver
  },
  Hashtag: {
    hashtag: actionResolvers.FindUniqueHashtagResolver,
    findFirstHashtag: actionResolvers.FindFirstHashtagResolver,
    hashtags: actionResolvers.FindManyHashtagResolver,
    createHashtag: actionResolvers.CreateHashtagResolver,
    createManyHashtag: actionResolvers.CreateManyHashtagResolver,
    deleteHashtag: actionResolvers.DeleteHashtagResolver,
    updateHashtag: actionResolvers.UpdateHashtagResolver,
    deleteManyHashtag: actionResolvers.DeleteManyHashtagResolver,
    updateManyHashtag: actionResolvers.UpdateManyHashtagResolver,
    upsertHashtag: actionResolvers.UpsertHashtagResolver,
    aggregateHashtag: actionResolvers.AggregateHashtagResolver,
    groupByHashtag: actionResolvers.GroupByHashtagResolver
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
  }
};
const resolversInfo = {
  Attachment: ["attachment", "findFirstAttachment", "attachments", "createAttachment", "createManyAttachment", "deleteAttachment", "updateAttachment", "deleteManyAttachment", "updateManyAttachment", "upsertAttachment", "aggregateAttachment", "groupByAttachment"],
  Hashtag: ["hashtag", "findFirstHashtag", "hashtags", "createHashtag", "createManyHashtag", "deleteHashtag", "updateHashtag", "deleteManyHashtag", "updateManyHashtag", "upsertHashtag", "aggregateHashtag", "groupByHashtag"],
  Label: ["label", "findFirstLabel", "labels", "createLabel", "createManyLabel", "deleteLabel", "updateLabel", "deleteManyLabel", "updateManyLabel", "upsertLabel", "aggregateLabel", "groupByLabel"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  PostComment: ["postComment", "findFirstPostComment", "postComments", "createPostComment", "createManyPostComment", "deletePostComment", "updatePostComment", "deleteManyPostComment", "updateManyPostComment", "upsertPostComment", "aggregatePostComment", "groupByPostComment"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  UserProfile: ["userProfile", "findFirstUserProfile", "userProfiles", "createUserProfile", "createManyUserProfile", "deleteUserProfile", "updateUserProfile", "deleteManyUserProfile", "updateManyUserProfile", "upsertUserProfile", "aggregateUserProfile", "groupByUserProfile"]
};
const relationResolversInfo = {
  Attachment: ["post"],
  Hashtag: ["creator", "posts"],
  Label: ["creator", "posts", "profile"],
  Post: ["likers", "comments", "attachments", "hashtags", "labels", "creator"],
  PostComment: ["creator", "post", "likers"],
  User: ["profile", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserProfile: ["user", "labels"]
};
const modelsInfo = {
  Attachment: ["id", "createdAt", "updatedAt", "url", "type", "postId"],
  Hashtag: ["id", "createdAt", "updatedAt", "name", "uses", "creatorId"],
  Label: ["id", "createdAt", "updatedAt", "title", "color", "description", "creatorId", "profileId"],
  Post: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "creatorId"],
  PostComment: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  User: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profileId"],
  UserProfile: ["id", "avatarURL", "bio"]
};
const inputsInfo = {
  AttachmentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "url", "type", "post", "postId"],
  AttachmentOrderByInput: ["id", "createdAt", "updatedAt", "url", "type", "postId"],
  AttachmentWhereUniqueInput: ["id"],
  AttachmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "url", "type", "postId"],
  HashtagWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "uses", "creator", "creatorId", "posts"],
  HashtagOrderByInput: ["id", "createdAt", "updatedAt", "name", "uses", "creatorId"],
  HashtagWhereUniqueInput: ["id", "name"],
  HashtagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "uses", "creatorId"],
  LabelWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "color", "description", "creator", "creatorId", "posts", "profile", "profileId"],
  LabelOrderByInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "creatorId", "profileId"],
  LabelWhereUniqueInput: ["id"],
  LabelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "color", "description", "creatorId", "profileId"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "type", "likers", "likes", "comments", "attachments", "hashtags", "labels", "creator", "creatorId"],
  PostOrderByInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "creatorId"],
  PostWhereUniqueInput: ["id"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "type", "likes", "creatorId"],
  PostCommentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "body", "creator", "creatorId", "post", "postId", "edited", "likers", "likes"],
  PostCommentOrderByInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  PostCommentWhereUniqueInput: ["id"],
  PostCommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "profileId", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserOrderByInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profileId"],
  UserWhereUniqueInput: ["id", "username", "profileId"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profileId"],
  UserProfileWhereInput: ["AND", "OR", "NOT", "id", "user", "avatarURL", "bio", "labels"],
  UserProfileOrderByInput: ["id", "avatarURL", "bio"],
  UserProfileWhereUniqueInput: ["id"],
  UserProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "avatarURL", "bio"],
  AttachmentCreateInput: ["id", "createdAt", "updatedAt", "url", "type", "post"],
  AttachmentUpdateInput: ["id", "createdAt", "updatedAt", "url", "type", "post"],
  AttachmentCreateManyInput: ["id", "createdAt", "updatedAt", "url", "type", "postId"],
  AttachmentUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "url", "type"],
  HashtagCreateInput: ["id", "createdAt", "updatedAt", "name", "uses", "creator", "posts"],
  HashtagUpdateInput: ["id", "createdAt", "updatedAt", "name", "uses", "creator", "posts"],
  HashtagCreateManyInput: ["id", "createdAt", "updatedAt", "name", "uses", "creatorId"],
  HashtagUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "uses"],
  LabelCreateInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "creator", "posts", "profile"],
  LabelUpdateInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "creator", "posts", "profile"],
  LabelCreateManyInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "creatorId", "profileId"],
  LabelUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title", "color", "description"],
  PostCreateInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "attachments", "hashtags", "labels", "creator"],
  PostUpdateInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "attachments", "hashtags", "labels", "creator"],
  PostCreateManyInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "creatorId"],
  PostUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes"],
  PostCommentCreateInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "likers"],
  PostCommentUpdateInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "likers"],
  PostCommentCreateManyInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  PostCommentUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes"],
  UserCreateInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserUpdateInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profileId"],
  UserUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role"],
  UserProfileCreateInput: ["id", "avatarURL", "bio", "user", "labels"],
  UserProfileUpdateInput: ["id", "avatarURL", "bio", "user", "labels"],
  UserProfileCreateManyInput: ["id", "avatarURL", "bio"],
  UserProfileUpdateManyMutationInput: ["id", "avatarURL", "bio"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumAttachmentTypeFilter: ["equals", "in", "notIn", "not"],
  PostRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumAttachmentTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  PostListRelationFilter: ["every", "some", "none"],
  BigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserProfileRelationFilter: ["is", "isNot"],
  EnumPostTypeFilter: ["equals", "in", "notIn", "not"],
  UserListRelationFilter: ["every", "some", "none"],
  PostCommentListRelationFilter: ["every", "some", "none"],
  AttachmentListRelationFilter: ["every", "some", "none"],
  HashtagListRelationFilter: ["every", "some", "none"],
  LabelListRelationFilter: ["every", "some", "none"],
  EnumPostTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumRoleNullableFilter: ["equals", "in", "notIn", "not"],
  EnumRoleNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PostCreateNestedOneWithoutAttachmentsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EnumAttachmentTypeFieldUpdateOperationsInput: ["set"],
  PostUpdateOneWithoutAttachmentsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserCreateNestedOneWithoutCreatedHashtagsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutHashtagsInput: ["create", "connectOrCreate", "connect"],
  BigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutCreatedHashtagsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateManyWithoutHashtagsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCreatedLabelsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutLabelsInput: ["create", "connectOrCreate", "connect"],
  UserProfileCreateNestedOneWithoutLabelsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCreatedLabelsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateManyWithoutLabelsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserProfileUpdateOneRequiredWithoutLabelsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedManyWithoutLikedPostsInput: ["create", "connectOrCreate", "connect"],
  PostCommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  AttachmentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  HashtagCreateNestedManyWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  LabelCreateNestedManyWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  EnumPostTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutLikedPostsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  AttachmentUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  HashtagUpdateManyWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  LabelUpdateManyWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCreatedPostCommentsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutLikedCommentsInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutCreatedPostCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateManyWithoutLikedCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  PostCommentCreateNestedManyWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  PostCommentCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedManyWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
  LabelCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  HashtagCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableEnumRoleFieldUpdateOperationsInput: ["set"],
  UserProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  PostUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  LabelUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  HashtagUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  LabelCreateNestedManyWithoutProfileInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  LabelUpdateManyWithoutProfileInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumAttachmentTypeFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumAttachmentTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumPostTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumPostTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumRoleNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumRoleNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PostCreateWithoutAttachmentsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "hashtags", "labels", "creator"],
  PostCreateOrConnectWithoutAttachmentsInput: ["where", "create"],
  PostUpsertWithoutAttachmentsInput: ["update", "create"],
  PostUpdateWithoutAttachmentsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "hashtags", "labels", "creator"],
  UserCreateWithoutCreatedHashtagsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels"],
  UserCreateOrConnectWithoutCreatedHashtagsInput: ["where", "create"],
  PostCreateWithoutHashtagsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "attachments", "labels", "creator"],
  PostCreateOrConnectWithoutHashtagsInput: ["where", "create"],
  UserUpsertWithoutCreatedHashtagsInput: ["update", "create"],
  UserUpdateWithoutCreatedHashtagsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels"],
  PostUpsertWithWhereUniqueWithoutHashtagsInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutHashtagsInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutHashtagsInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "type", "likes", "creatorId"],
  UserCreateWithoutCreatedLabelsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdHashtags"],
  UserCreateOrConnectWithoutCreatedLabelsInput: ["where", "create"],
  PostCreateWithoutLabelsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "attachments", "hashtags", "creator"],
  PostCreateOrConnectWithoutLabelsInput: ["where", "create"],
  UserProfileCreateWithoutLabelsInput: ["id", "avatarURL", "bio", "user"],
  UserProfileCreateOrConnectWithoutLabelsInput: ["where", "create"],
  UserUpsertWithoutCreatedLabelsInput: ["update", "create"],
  UserUpdateWithoutCreatedLabelsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdHashtags"],
  PostUpsertWithWhereUniqueWithoutLabelsInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutLabelsInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutLabelsInput: ["where", "data"],
  UserProfileUpsertWithoutLabelsInput: ["update", "create"],
  UserProfileUpdateWithoutLabelsInput: ["id", "avatarURL", "bio", "user"],
  UserCreateWithoutLikedPostsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserCreateOrConnectWithoutLikedPostsInput: ["where", "create"],
  PostCommentCreateWithoutPostInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "likers"],
  PostCommentCreateOrConnectWithoutPostInput: ["where", "create"],
  PostCommentCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  AttachmentCreateWithoutPostInput: ["id", "createdAt", "updatedAt", "url", "type"],
  AttachmentCreateOrConnectWithoutPostInput: ["where", "create"],
  AttachmentCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  HashtagCreateWithoutPostsInput: ["id", "createdAt", "updatedAt", "name", "uses", "creator"],
  HashtagCreateOrConnectWithoutPostsInput: ["where", "create"],
  LabelCreateWithoutPostsInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "creator", "profile"],
  LabelCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserCreateWithoutPostsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutLikedPostsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedPostsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedPostsInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profileId"],
  PostCommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  PostCommentScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  AttachmentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  AttachmentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  AttachmentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  AttachmentScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "url", "type", "postId"],
  HashtagUpsertWithWhereUniqueWithoutPostsInput: ["where", "update", "create"],
  HashtagUpdateWithWhereUniqueWithoutPostsInput: ["where", "data"],
  HashtagUpdateManyWithWhereWithoutPostsInput: ["where", "data"],
  HashtagScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "uses", "creatorId"],
  LabelUpsertWithWhereUniqueWithoutPostsInput: ["where", "update", "create"],
  LabelUpdateWithWhereUniqueWithoutPostsInput: ["where", "data"],
  LabelUpdateManyWithWhereWithoutPostsInput: ["where", "data"],
  LabelScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "color", "description", "creatorId", "profileId"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserCreateWithoutCreatedPostCommentsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserCreateOrConnectWithoutCreatedPostCommentsInput: ["where", "create"],
  PostCreateWithoutCommentsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "attachments", "hashtags", "labels", "creator"],
  PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserCreateWithoutLikedCommentsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserCreateOrConnectWithoutLikedCommentsInput: ["where", "create"],
  UserUpsertWithoutCreatedPostCommentsInput: ["update", "create"],
  UserUpdateWithoutCreatedPostCommentsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdHashtags"],
  PostUpsertWithoutCommentsInput: ["update", "create"],
  PostUpdateWithoutCommentsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "attachments", "hashtags", "labels", "creator"],
  UserUpsertWithWhereUniqueWithoutLikedCommentsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedCommentsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedCommentsInput: ["where", "data"],
  UserProfileCreateWithoutUserInput: ["id", "avatarURL", "bio", "labels"],
  UserProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  PostCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "attachments", "hashtags", "labels"],
  PostCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  PostCreateWithoutLikersInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "comments", "attachments", "hashtags", "labels", "creator"],
  PostCreateOrConnectWithoutLikersInput: ["where", "create"],
  PostCommentCreateWithoutLikersInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "post"],
  PostCommentCreateOrConnectWithoutLikersInput: ["where", "create"],
  PostCommentCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "post", "likers"],
  PostCommentCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostCommentCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutFollowersInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "createdLabels", "createdHashtags"],
  UserCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserCreateWithoutFollowingInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "followers", "createdLabels", "createdHashtags"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  LabelCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "posts", "profile"],
  LabelCreateOrConnectWithoutCreatorInput: ["where", "create"],
  LabelCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  HashtagCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "name", "uses", "posts"],
  HashtagCreateOrConnectWithoutCreatorInput: ["where", "create"],
  HashtagCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  UserProfileUpsertWithoutUserInput: ["update", "create"],
  UserProfileUpdateWithoutUserInput: ["id", "avatarURL", "bio", "labels"],
  PostUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostUpsertWithWhereUniqueWithoutLikersInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutLikersInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutLikersInput: ["where", "data"],
  PostCommentUpsertWithWhereUniqueWithoutLikersInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutLikersInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutLikersInput: ["where", "data"],
  PostCommentUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutFollowersInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowersInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowersInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
  LabelUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  LabelUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  LabelUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  HashtagUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  HashtagUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  HashtagUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  UserCreateWithoutProfileInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  LabelCreateWithoutProfileInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "creator", "posts"],
  LabelCreateOrConnectWithoutProfileInput: ["where", "create"],
  LabelCreateManyProfileInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  LabelUpsertWithWhereUniqueWithoutProfileInput: ["where", "update", "create"],
  LabelUpdateWithWhereUniqueWithoutProfileInput: ["where", "data"],
  LabelUpdateManyWithWhereWithoutProfileInput: ["where", "data"],
  PostUpdateWithoutHashtagsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "attachments", "labels", "creator"],
  PostUpdateWithoutLabelsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "attachments", "hashtags", "creator"],
  PostCommentCreateManyPostInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "edited", "likes"],
  AttachmentCreateManyPostInput: ["id", "createdAt", "updatedAt", "url", "type"],
  UserUpdateWithoutLikedPostsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedComments", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  PostCommentUpdateWithoutPostInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "likers"],
  AttachmentUpdateWithoutPostInput: ["id", "createdAt", "updatedAt", "url", "type"],
  HashtagUpdateWithoutPostsInput: ["id", "createdAt", "updatedAt", "name", "uses", "creator"],
  LabelUpdateWithoutPostsInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "creator", "profile"],
  UserUpdateWithoutLikedCommentsInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "createdPostComments", "following", "followers", "createdLabels", "createdHashtags"],
  PostCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes"],
  PostCommentCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "body", "postId", "edited", "likes"],
  LabelCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "profileId"],
  HashtagCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "name", "uses"],
  PostUpdateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "likers", "comments", "attachments", "hashtags", "labels"],
  PostUpdateWithoutLikersInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "comments", "attachments", "hashtags", "labels", "creator"],
  PostCommentUpdateWithoutLikersInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "post"],
  PostCommentUpdateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "post", "likers"],
  UserUpdateWithoutFollowersInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "following", "createdLabels", "createdHashtags"],
  UserUpdateWithoutFollowingInput: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profile", "posts", "likedPosts", "likedComments", "createdPostComments", "followers", "createdLabels", "createdHashtags"],
  LabelUpdateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "posts", "profile"],
  HashtagUpdateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "name", "uses", "posts"],
  LabelCreateManyProfileInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "creatorId"],
  LabelUpdateWithoutProfileInput: ["id", "createdAt", "updatedAt", "title", "color", "description", "creator", "posts"]
};
const outputsInfo = {
  AggregateAttachment: ["_count", "_min", "_max"],
  AttachmentGroupBy: ["id", "createdAt", "updatedAt", "url", "type", "postId", "_count", "_min", "_max"],
  AggregateHashtag: ["_count", "_avg", "_sum", "_min", "_max"],
  HashtagGroupBy: ["id", "createdAt", "updatedAt", "name", "uses", "creatorId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateLabel: ["_count", "_min", "_max"],
  LabelGroupBy: ["id", "createdAt", "updatedAt", "title", "color", "description", "creatorId", "profileId", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "creatorId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePostComment: ["_count", "_avg", "_sum", "_min", "_max"],
  PostCommentGroupBy: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profileId", "_count", "_min", "_max"],
  AggregateUserProfile: ["_count", "_min", "_max"],
  UserProfileGroupBy: ["id", "avatarURL", "bio", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  AttachmentCountAggregate: ["id", "createdAt", "updatedAt", "url", "type", "postId", "_all"],
  AttachmentMinAggregate: ["id", "createdAt", "updatedAt", "url", "type", "postId"],
  AttachmentMaxAggregate: ["id", "createdAt", "updatedAt", "url", "type", "postId"],
  HashtagCountAggregate: ["id", "createdAt", "updatedAt", "name", "uses", "creatorId", "_all"],
  HashtagAvgAggregate: ["uses"],
  HashtagSumAggregate: ["uses"],
  HashtagMinAggregate: ["id", "createdAt", "updatedAt", "name", "uses", "creatorId"],
  HashtagMaxAggregate: ["id", "createdAt", "updatedAt", "name", "uses", "creatorId"],
  LabelCountAggregate: ["id", "createdAt", "updatedAt", "title", "color", "description", "creatorId", "profileId", "_all"],
  LabelMinAggregate: ["id", "createdAt", "updatedAt", "title", "color", "description", "creatorId", "profileId"],
  LabelMaxAggregate: ["id", "createdAt", "updatedAt", "title", "color", "description", "creatorId", "profileId"],
  PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "creatorId", "_all"],
  PostAvgAggregate: ["likes"],
  PostSumAggregate: ["likes"],
  PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "creatorId"],
  PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "description", "type", "likes", "creatorId"],
  PostCommentCountAggregate: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes", "_all"],
  PostCommentAvgAggregate: ["likes"],
  PostCommentSumAggregate: ["likes"],
  PostCommentMinAggregate: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  PostCommentMaxAggregate: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profileId", "_all"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profileId"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "displayName", "username", "email", "password", "isLocal", "role", "profileId"],
  UserProfileCountAggregate: ["id", "avatarURL", "bio", "_all"],
  UserProfileMinAggregate: ["id", "avatarURL", "bio"],
  UserProfileMaxAggregate: ["id", "avatarURL", "bio"]
};
const argsInfo = {
  FindUniqueAttachmentArgs: ["where"],
  FindFirstAttachmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAttachmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAttachmentArgs: ["data"],
  CreateManyAttachmentArgs: ["data", "skipDuplicates"],
  DeleteAttachmentArgs: ["where"],
  UpdateAttachmentArgs: ["data", "where"],
  DeleteManyAttachmentArgs: ["where"],
  UpdateManyAttachmentArgs: ["data", "where"],
  UpsertAttachmentArgs: ["where", "create", "update"],
  AggregateAttachmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAttachmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueHashtagArgs: ["where"],
  FindFirstHashtagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyHashtagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateHashtagArgs: ["data"],
  CreateManyHashtagArgs: ["data", "skipDuplicates"],
  DeleteHashtagArgs: ["where"],
  UpdateHashtagArgs: ["data", "where"],
  DeleteManyHashtagArgs: ["where"],
  UpdateManyHashtagArgs: ["data", "where"],
  UpsertHashtagArgs: ["where", "create", "update"],
  AggregateHashtagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByHashtagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueLabelArgs: ["where"],
  FindFirstLabelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyLabelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateLabelArgs: ["data"],
  CreateManyLabelArgs: ["data", "skipDuplicates"],
  DeleteLabelArgs: ["where"],
  UpdateLabelArgs: ["data", "where"],
  DeleteManyLabelArgs: ["where"],
  UpdateManyLabelArgs: ["data", "where"],
  UpsertLabelArgs: ["where", "create", "update"],
  AggregateLabelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByLabelArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
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
  CreateManyPostCommentArgs: ["data", "skipDuplicates"],
  DeletePostCommentArgs: ["where"],
  UpdatePostCommentArgs: ["data", "where"],
  DeleteManyPostCommentArgs: ["where"],
  UpdateManyPostCommentArgs: ["data", "where"],
  UpsertPostCommentArgs: ["where", "create", "update"],
  AggregatePostCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
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
  CreateManyUserProfileArgs: ["data", "skipDuplicates"],
  DeleteUserProfileArgs: ["where"],
  UpdateUserProfileArgs: ["data", "where"],
  DeleteManyUserProfileArgs: ["where"],
  UpdateManyUserProfileArgs: ["data", "where"],
  UpsertUserProfileArgs: ["where", "create", "update"],
  AggregateUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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







