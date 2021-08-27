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
  Comment: crudResolvers.CommentCrudResolver,
  Attachment: crudResolvers.AttachmentCrudResolver,
  Label: crudResolvers.LabelCrudResolver,
  Report: crudResolvers.ReportCrudResolver,
  Organization: crudResolvers.OrganizationCrudResolver,
  Job: crudResolvers.JobCrudResolver,
  JobApplicant: crudResolvers.JobApplicantCrudResolver,
  Shift: crudResolvers.ShiftCrudResolver
};
const relationResolversMap = {
  OauthConnection: relationResolvers.OauthConnectionRelationsResolver,
  TokenPair: relationResolvers.TokenPairRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  UserProfile: relationResolvers.UserProfileRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  Attachment: relationResolvers.AttachmentRelationsResolver,
  Label: relationResolvers.LabelRelationsResolver,
  Report: relationResolvers.ReportRelationsResolver
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
  Comment: {
    comment: actionResolvers.FindUniqueCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    comments: actionResolvers.FindManyCommentResolver,
    createComment: actionResolvers.CreateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    deleteComment: actionResolvers.DeleteCommentResolver,
    updateComment: actionResolvers.UpdateCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    upsertComment: actionResolvers.UpsertCommentResolver,
    aggregateComment: actionResolvers.AggregateCommentResolver,
    groupByComment: actionResolvers.GroupByCommentResolver
  },
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
  Report: {
    report: actionResolvers.FindUniqueReportResolver,
    findFirstReport: actionResolvers.FindFirstReportResolver,
    reports: actionResolvers.FindManyReportResolver,
    createReport: actionResolvers.CreateReportResolver,
    createManyReport: actionResolvers.CreateManyReportResolver,
    deleteReport: actionResolvers.DeleteReportResolver,
    updateReport: actionResolvers.UpdateReportResolver,
    deleteManyReport: actionResolvers.DeleteManyReportResolver,
    updateManyReport: actionResolvers.UpdateManyReportResolver,
    upsertReport: actionResolvers.UpsertReportResolver,
    aggregateReport: actionResolvers.AggregateReportResolver,
    groupByReport: actionResolvers.GroupByReportResolver
  },
  Organization: {
    organization: actionResolvers.FindUniqueOrganizationResolver,
    findFirstOrganization: actionResolvers.FindFirstOrganizationResolver,
    organizations: actionResolvers.FindManyOrganizationResolver,
    createOrganization: actionResolvers.CreateOrganizationResolver,
    createManyOrganization: actionResolvers.CreateManyOrganizationResolver,
    deleteOrganization: actionResolvers.DeleteOrganizationResolver,
    updateOrganization: actionResolvers.UpdateOrganizationResolver,
    deleteManyOrganization: actionResolvers.DeleteManyOrganizationResolver,
    updateManyOrganization: actionResolvers.UpdateManyOrganizationResolver,
    upsertOrganization: actionResolvers.UpsertOrganizationResolver,
    aggregateOrganization: actionResolvers.AggregateOrganizationResolver,
    groupByOrganization: actionResolvers.GroupByOrganizationResolver
  },
  Job: {
    job: actionResolvers.FindUniqueJobResolver,
    findFirstJob: actionResolvers.FindFirstJobResolver,
    jobs: actionResolvers.FindManyJobResolver,
    createJob: actionResolvers.CreateJobResolver,
    createManyJob: actionResolvers.CreateManyJobResolver,
    deleteJob: actionResolvers.DeleteJobResolver,
    updateJob: actionResolvers.UpdateJobResolver,
    deleteManyJob: actionResolvers.DeleteManyJobResolver,
    updateManyJob: actionResolvers.UpdateManyJobResolver,
    upsertJob: actionResolvers.UpsertJobResolver,
    aggregateJob: actionResolvers.AggregateJobResolver,
    groupByJob: actionResolvers.GroupByJobResolver
  },
  JobApplicant: {
    jobApplicant: actionResolvers.FindUniqueJobApplicantResolver,
    findFirstJobApplicant: actionResolvers.FindFirstJobApplicantResolver,
    jobApplicants: actionResolvers.FindManyJobApplicantResolver,
    createJobApplicant: actionResolvers.CreateJobApplicantResolver,
    createManyJobApplicant: actionResolvers.CreateManyJobApplicantResolver,
    deleteJobApplicant: actionResolvers.DeleteJobApplicantResolver,
    updateJobApplicant: actionResolvers.UpdateJobApplicantResolver,
    deleteManyJobApplicant: actionResolvers.DeleteManyJobApplicantResolver,
    updateManyJobApplicant: actionResolvers.UpdateManyJobApplicantResolver,
    upsertJobApplicant: actionResolvers.UpsertJobApplicantResolver,
    aggregateJobApplicant: actionResolvers.AggregateJobApplicantResolver,
    groupByJobApplicant: actionResolvers.GroupByJobApplicantResolver
  },
  Shift: {
    shift: actionResolvers.FindUniqueShiftResolver,
    findFirstShift: actionResolvers.FindFirstShiftResolver,
    shifts: actionResolvers.FindManyShiftResolver,
    createShift: actionResolvers.CreateShiftResolver,
    createManyShift: actionResolvers.CreateManyShiftResolver,
    deleteShift: actionResolvers.DeleteShiftResolver,
    updateShift: actionResolvers.UpdateShiftResolver,
    deleteManyShift: actionResolvers.DeleteManyShiftResolver,
    updateManyShift: actionResolvers.UpdateManyShiftResolver,
    upsertShift: actionResolvers.UpsertShiftResolver,
    aggregateShift: actionResolvers.AggregateShiftResolver,
    groupByShift: actionResolvers.GroupByShiftResolver
  }
};
const resolversInfo = {
  OauthConnection: ["oauthConnection", "findFirstOauthConnection", "oauthConnections", "createOauthConnection", "createManyOauthConnection", "deleteOauthConnection", "updateOauthConnection", "deleteManyOauthConnection", "updateManyOauthConnection", "upsertOauthConnection", "aggregateOauthConnection", "groupByOauthConnection"],
  TokenPair: ["tokenPair", "findFirstTokenPair", "tokenPairs", "createTokenPair", "createManyTokenPair", "deleteTokenPair", "updateTokenPair", "deleteManyTokenPair", "updateManyTokenPair", "upsertTokenPair", "aggregateTokenPair", "groupByTokenPair"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  UserProfile: ["userProfile", "findFirstUserProfile", "userProfiles", "createUserProfile", "createManyUserProfile", "deleteUserProfile", "updateUserProfile", "deleteManyUserProfile", "updateManyUserProfile", "upsertUserProfile", "aggregateUserProfile", "groupByUserProfile"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  Comment: ["comment", "findFirstComment", "comments", "createComment", "createManyComment", "deleteComment", "updateComment", "deleteManyComment", "updateManyComment", "upsertComment", "aggregateComment", "groupByComment"],
  Attachment: ["attachment", "findFirstAttachment", "attachments", "createAttachment", "createManyAttachment", "deleteAttachment", "updateAttachment", "deleteManyAttachment", "updateManyAttachment", "upsertAttachment", "aggregateAttachment", "groupByAttachment"],
  Label: ["label", "findFirstLabel", "labels", "createLabel", "createManyLabel", "deleteLabel", "updateLabel", "deleteManyLabel", "updateManyLabel", "upsertLabel", "aggregateLabel", "groupByLabel"],
  Report: ["report", "findFirstReport", "reports", "createReport", "createManyReport", "deleteReport", "updateReport", "deleteManyReport", "updateManyReport", "upsertReport", "aggregateReport", "groupByReport"],
  Organization: ["organization", "findFirstOrganization", "organizations", "createOrganization", "createManyOrganization", "deleteOrganization", "updateOrganization", "deleteManyOrganization", "updateManyOrganization", "upsertOrganization", "aggregateOrganization", "groupByOrganization"],
  Job: ["job", "findFirstJob", "jobs", "createJob", "createManyJob", "deleteJob", "updateJob", "deleteManyJob", "updateManyJob", "upsertJob", "aggregateJob", "groupByJob"],
  JobApplicant: ["jobApplicant", "findFirstJobApplicant", "jobApplicants", "createJobApplicant", "createManyJobApplicant", "deleteJobApplicant", "updateJobApplicant", "deleteManyJobApplicant", "updateManyJobApplicant", "upsertJobApplicant", "aggregateJobApplicant", "groupByJobApplicant"],
  Shift: ["shift", "findFirstShift", "shifts", "createShift", "createManyShift", "deleteShift", "updateShift", "deleteManyShift", "updateManyShift", "upsertShift", "aggregateShift", "groupByShift"]
};
const relationResolversInfo = {
  OauthConnection: ["user"],
  TokenPair: ["user"],
  User: ["profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserProfile: ["user", "labels"],
  Post: ["likers", "comments", "attachments", "creator"],
  Comment: ["creator", "post", "report", "likers"],
  Attachment: ["post", "report", "creator"],
  Label: ["creator", "profile"],
  Report: ["creator", "attachments", "comments"]
};
const modelsInfo = {
  OauthConnection: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  TokenPair: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "isExpired"],
  User: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserProfile: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  Post: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  Comment: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "reportId", "edited", "likes"],
  Attachment: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId", "creatorId"],
  Label: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  Report: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creatorId", "status"],
  Organization: ["id", "createdAt", "updatedAt"],
  Job: ["id", "createdAt", "updatedAt"],
  JobApplicant: ["id", "createdAt", "updatedAt"],
  Shift: ["id", "createdAt", "updatedAt"]
};
const inputsInfo = {
  OauthConnectionWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user", "userId"],
  OauthConnectionOrderByInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionWhereUniqueInput: ["id"],
  OauthConnectionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  TokenPairWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "accessToken", "refreshToken", "user", "userId", "isExpired"],
  TokenPairOrderByInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "isExpired"],
  TokenPairWhereUniqueInput: ["id", "accessToken", "refreshToken"],
  TokenPairScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "isExpired"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "profileId", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserOrderByInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserWhereUniqueInput: ["id", "username", "email"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserProfileWhereInput: ["AND", "OR", "NOT", "id", "updatedAt", "user", "status", "avatarUrl", "bio", "labels"],
  UserProfileOrderByInput: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  UserProfileWhereUniqueInput: ["id"],
  UserProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "updatedAt", "status", "avatarUrl", "bio"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "attachments", "creator", "creatorId"],
  PostOrderByInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostWhereUniqueInput: ["id"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "body", "creator", "creatorId", "post", "postId", "report", "reportId", "edited", "likers", "likes"],
  CommentOrderByInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "reportId", "edited", "likes"],
  CommentWhereUniqueInput: ["id"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "body", "creatorId", "postId", "reportId", "edited", "likes"],
  AttachmentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "attachmentUrl", "type", "post", "postId", "report", "reportId", "creator", "creatorId"],
  AttachmentOrderByInput: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId", "creatorId"],
  AttachmentWhereUniqueInput: ["id"],
  AttachmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId", "creatorId"],
  LabelWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "uses", "creator", "creatorId", "profile", "profileId"],
  LabelOrderByInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  LabelWhereUniqueInput: ["id"],
  LabelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  ReportWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creator", "creatorId", "attachments", "comments", "status"],
  ReportOrderByInput: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creatorId", "status"],
  ReportWhereUniqueInput: ["id"],
  ReportScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creatorId", "status"],
  OrganizationWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  OrganizationOrderByInput: ["id", "createdAt", "updatedAt"],
  OrganizationWhereUniqueInput: ["id"],
  OrganizationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  JobWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  JobOrderByInput: ["id", "createdAt", "updatedAt"],
  JobWhereUniqueInput: ["id"],
  JobScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  JobApplicantWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  JobApplicantOrderByInput: ["id", "createdAt", "updatedAt"],
  JobApplicantWhereUniqueInput: ["id"],
  JobApplicantScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  ShiftWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  ShiftOrderByInput: ["id", "createdAt", "updatedAt"],
  ShiftWhereUniqueInput: ["id"],
  ShiftScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  OauthConnectionCreateInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user"],
  OauthConnectionUpdateInput: ["createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user"],
  OauthConnectionCreateManyInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionUpdateManyMutationInput: ["createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  TokenPairCreateInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "isExpired", "user"],
  TokenPairUpdateInput: ["createdAt", "updatedAt", "accessToken", "refreshToken", "isExpired", "user"],
  TokenPairCreateManyInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "isExpired"],
  TokenPairUpdateManyMutationInput: ["createdAt", "updatedAt", "accessToken", "refreshToken", "isExpired"],
  UserCreateInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserUpdateInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole"],
  UserProfileCreateInput: ["id", "updatedAt", "status", "avatarUrl", "bio", "user", "labels"],
  UserProfileUpdateInput: ["updatedAt", "status", "avatarUrl", "bio", "user", "labels"],
  UserProfileCreateManyInput: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  UserProfileUpdateManyMutationInput: ["updatedAt", "status", "avatarUrl", "bio"],
  PostCreateInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "attachments", "creator"],
  PostUpdateInput: ["createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "attachments", "creator"],
  PostCreateManyInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "description", "type"],
  CommentCreateInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "report", "likers"],
  CommentUpdateInput: ["createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "report", "likers"],
  CommentCreateManyInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "reportId", "edited", "likes"],
  CommentUpdateManyMutationInput: ["createdAt", "updatedAt", "body", "edited", "likes"],
  AttachmentCreateInput: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "post", "report", "creator"],
  AttachmentUpdateInput: ["createdAt", "updatedAt", "attachmentUrl", "type", "post", "report", "creator"],
  AttachmentCreateManyInput: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId", "creatorId"],
  AttachmentUpdateManyMutationInput: ["createdAt", "updatedAt", "attachmentUrl", "type"],
  LabelCreateInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creator", "profile"],
  LabelUpdateInput: ["createdAt", "updatedAt", "name", "description", "uses", "creator", "profile"],
  LabelCreateManyInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  LabelUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "description", "uses"],
  ReportCreateInput: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "status", "creator", "attachments", "comments"],
  ReportUpdateInput: ["createdAt", "updatedAt", "name", "description", "severity", "type", "status", "creator", "attachments", "comments"],
  ReportCreateManyInput: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creatorId", "status"],
  ReportUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "description", "severity", "type", "status"],
  OrganizationCreateInput: ["id", "createdAt", "updatedAt"],
  OrganizationUpdateInput: ["createdAt", "updatedAt"],
  OrganizationCreateManyInput: ["id", "createdAt", "updatedAt"],
  OrganizationUpdateManyMutationInput: ["createdAt", "updatedAt"],
  JobCreateInput: ["id", "createdAt", "updatedAt"],
  JobUpdateInput: ["createdAt", "updatedAt"],
  JobCreateManyInput: ["id", "createdAt", "updatedAt"],
  JobUpdateManyMutationInput: ["createdAt", "updatedAt"],
  JobApplicantCreateInput: ["id", "createdAt", "updatedAt"],
  JobApplicantUpdateInput: ["createdAt", "updatedAt"],
  JobApplicantCreateManyInput: ["id", "createdAt", "updatedAt"],
  JobApplicantUpdateManyMutationInput: ["createdAt", "updatedAt"],
  ShiftCreateInput: ["id", "createdAt", "updatedAt"],
  ShiftUpdateInput: ["createdAt", "updatedAt"],
  ShiftCreateManyInput: ["id", "createdAt", "updatedAt"],
  ShiftUpdateManyMutationInput: ["createdAt", "updatedAt"],
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
  CommentListRelationFilter: ["every", "some", "none"],
  UserListRelationFilter: ["every", "some", "none"],
  LabelListRelationFilter: ["every", "some", "none"],
  AttachmentListRelationFilter: ["every", "some", "none"],
  ReportListRelationFilter: ["every", "some", "none"],
  OauthConnectionListRelationFilter: ["every", "some", "none"],
  TokenPairListRelationFilter: ["every", "some", "none"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRoleNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumStatusFilter: ["equals", "in", "notIn", "not"],
  EnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumPostTypeFilter: ["equals", "in", "notIn", "not"],
  EnumPostTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PostRelationFilter: ["is", "isNot"],
  ReportRelationFilter: ["is", "isNot"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumAttachmentTypeFilter: ["equals", "in", "notIn", "not"],
  EnumAttachmentTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumBugReportSeverityFilter: ["equals", "in", "notIn", "not"],
  EnumRequestTypeFilter: ["equals", "in", "notIn", "not"],
  EnumReportStatusFilter: ["equals", "in", "notIn", "not"],
  EnumBugReportSeverityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumRequestTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumReportStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
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
  CommentCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
  LabelCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  AttachmentCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  ReportCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  OauthConnectionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  TokenPairCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableEnumRoleFieldUpdateOperationsInput: ["set"],
  UserProfileUpdateOneRequiredWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  LabelUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  AttachmentUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ReportUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  OauthConnectionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  TokenPairUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  LabelCreateNestedManyWithoutProfileInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  LabelUpdateManyWithoutProfileInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedManyWithoutLikedPostsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  AttachmentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  EnumPostTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutLikedPostsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  AttachmentUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCreatedCommentsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  ReportCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutLikedCommentsInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutCreatedCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ReportUpdateOneRequiredWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateManyWithoutLikedCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCreateNestedOneWithoutAttachmentsInput: ["create", "connectOrCreate", "connect"],
  ReportCreateNestedOneWithoutAttachmentsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutCreatedAttachmentsInput: ["create", "connectOrCreate", "connect"],
  EnumAttachmentTypeFieldUpdateOperationsInput: ["set"],
  PostUpdateOneWithoutAttachmentsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  ReportUpdateOneWithoutAttachmentsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserUpdateOneRequiredWithoutCreatedAttachmentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCreatedLabelsInput: ["create", "connectOrCreate", "connect"],
  UserProfileCreateNestedOneWithoutLabelsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCreatedLabelsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserProfileUpdateOneWithoutLabelsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserCreateNestedOneWithoutReportsInput: ["create", "connectOrCreate", "connect"],
  AttachmentCreateNestedManyWithoutReportInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutReportInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumBugReportSeverityFieldUpdateOperationsInput: ["set"],
  EnumRequestTypeFieldUpdateOperationsInput: ["set"],
  EnumReportStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutReportsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AttachmentUpdateManyWithoutReportInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutReportInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
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
  NestedEnumAttachmentTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumAttachmentTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumBugReportSeverityFilter: ["equals", "in", "notIn", "not"],
  NestedEnumRequestTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumReportStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumBugReportSeverityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumRequestTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumReportStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserCreateWithoutOauthConnectionsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "tokens"],
  UserCreateOrConnectWithoutOauthConnectionsInput: ["where", "create"],
  UserUpsertWithoutOauthConnectionsInput: ["update", "create"],
  UserUpdateWithoutOauthConnectionsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "tokens"],
  UserCreateWithoutTokensInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections"],
  UserCreateOrConnectWithoutTokensInput: ["where", "create"],
  UserUpsertWithoutTokensInput: ["update", "create"],
  UserUpdateWithoutTokensInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections"],
  UserProfileCreateWithoutUserInput: ["id", "updatedAt", "status", "avatarUrl", "bio", "labels"],
  UserProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  PostCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "attachments"],
  PostCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostCreateManyCreatorInputEnvelope: ["data"],
  CommentCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "post", "report", "likers"],
  CommentCreateOrConnectWithoutCreatorInput: ["where", "create"],
  CommentCreateManyCreatorInputEnvelope: ["data"],
  PostCreateWithoutLikersInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "comments", "attachments", "creator"],
  PostCreateOrConnectWithoutLikersInput: ["where", "create"],
  CommentCreateWithoutLikersInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "report"],
  CommentCreateOrConnectWithoutLikersInput: ["where", "create"],
  UserCreateWithoutFollowersInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserCreateWithoutFollowingInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  LabelCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "profile"],
  LabelCreateOrConnectWithoutCreatorInput: ["where", "create"],
  LabelCreateManyCreatorInputEnvelope: ["data"],
  AttachmentCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "post", "report"],
  AttachmentCreateOrConnectWithoutCreatorInput: ["where", "create"],
  AttachmentCreateManyCreatorInputEnvelope: ["data"],
  ReportCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "status", "attachments", "comments"],
  ReportCreateOrConnectWithoutCreatorInput: ["where", "create"],
  ReportCreateManyCreatorInputEnvelope: ["data"],
  OauthConnectionCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionCreateOrConnectWithoutUserInput: ["where", "create"],
  OauthConnectionCreateManyUserInputEnvelope: ["data"],
  TokenPairCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "isExpired"],
  TokenPairCreateOrConnectWithoutUserInput: ["where", "create"],
  TokenPairCreateManyUserInputEnvelope: ["data"],
  UserProfileUpsertWithoutUserInput: ["update", "create"],
  UserProfileUpdateWithoutUserInput: ["updatedAt", "status", "avatarUrl", "bio", "labels"],
  PostUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  CommentUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "body", "creatorId", "postId", "reportId", "edited", "likes"],
  PostUpsertWithWhereUniqueWithoutLikersInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutLikersInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutLikersInput: ["where", "data"],
  CommentUpsertWithWhereUniqueWithoutLikersInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutLikersInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutLikersInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutFollowersInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowersInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowersInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
  LabelUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  LabelUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  LabelUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  LabelScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  AttachmentUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  AttachmentUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  AttachmentUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  AttachmentScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId", "creatorId"],
  ReportUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  ReportUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  ReportUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  ReportScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creatorId", "status"],
  OauthConnectionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  OauthConnectionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  OauthConnectionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  OauthConnectionScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  TokenPairUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  TokenPairUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  TokenPairUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  TokenPairScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "isExpired"],
  UserCreateWithoutProfileInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  LabelCreateWithoutProfileInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creator"],
  LabelCreateOrConnectWithoutProfileInput: ["where", "create"],
  LabelCreateManyProfileInputEnvelope: ["data"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  LabelUpsertWithWhereUniqueWithoutProfileInput: ["where", "update", "create"],
  LabelUpdateWithWhereUniqueWithoutProfileInput: ["where", "data"],
  LabelUpdateManyWithWhereWithoutProfileInput: ["where", "data"],
  UserCreateWithoutLikedPostsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutLikedPostsInput: ["where", "create"],
  CommentCreateWithoutPostInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "report", "likers"],
  CommentCreateOrConnectWithoutPostInput: ["where", "create"],
  CommentCreateManyPostInputEnvelope: ["data"],
  AttachmentCreateWithoutPostInput: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "report", "creator"],
  AttachmentCreateOrConnectWithoutPostInput: ["where", "create"],
  AttachmentCreateManyPostInputEnvelope: ["data"],
  UserCreateWithoutPostsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutLikedPostsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedPostsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedPostsInput: ["where", "data"],
  CommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  AttachmentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  AttachmentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  AttachmentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateWithoutCreatedCommentsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutCreatedCommentsInput: ["where", "create"],
  PostCreateWithoutCommentsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likers", "attachments", "creator"],
  PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
  ReportCreateWithoutCommentsInput: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "status", "creator", "attachments"],
  ReportCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserCreateWithoutLikedCommentsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutLikedCommentsInput: ["where", "create"],
  UserUpsertWithoutCreatedCommentsInput: ["update", "create"],
  UserUpdateWithoutCreatedCommentsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  PostUpsertWithoutCommentsInput: ["update", "create"],
  PostUpdateWithoutCommentsInput: ["createdAt", "updatedAt", "title", "description", "type", "likers", "attachments", "creator"],
  ReportUpsertWithoutCommentsInput: ["update", "create"],
  ReportUpdateWithoutCommentsInput: ["createdAt", "updatedAt", "name", "description", "severity", "type", "status", "creator", "attachments"],
  UserUpsertWithWhereUniqueWithoutLikedCommentsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedCommentsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedCommentsInput: ["where", "data"],
  PostCreateWithoutAttachmentsInput: ["id", "createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "creator"],
  PostCreateOrConnectWithoutAttachmentsInput: ["where", "create"],
  ReportCreateWithoutAttachmentsInput: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "status", "creator", "comments"],
  ReportCreateOrConnectWithoutAttachmentsInput: ["where", "create"],
  UserCreateWithoutCreatedAttachmentsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "reports", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutCreatedAttachmentsInput: ["where", "create"],
  PostUpsertWithoutAttachmentsInput: ["update", "create"],
  PostUpdateWithoutAttachmentsInput: ["createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "creator"],
  ReportUpsertWithoutAttachmentsInput: ["update", "create"],
  ReportUpdateWithoutAttachmentsInput: ["createdAt", "updatedAt", "name", "description", "severity", "type", "status", "creator", "comments"],
  UserUpsertWithoutCreatedAttachmentsInput: ["update", "create"],
  UserUpdateWithoutCreatedAttachmentsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "reports", "oauthConnections", "tokens"],
  UserCreateWithoutCreatedLabelsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutCreatedLabelsInput: ["where", "create"],
  UserProfileCreateWithoutLabelsInput: ["id", "updatedAt", "status", "avatarUrl", "bio", "user"],
  UserProfileCreateOrConnectWithoutLabelsInput: ["where", "create"],
  UserUpsertWithoutCreatedLabelsInput: ["update", "create"],
  UserUpdateWithoutCreatedLabelsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserProfileUpsertWithoutLabelsInput: ["update", "create"],
  UserProfileUpdateWithoutLabelsInput: ["updatedAt", "status", "avatarUrl", "bio", "user"],
  UserCreateWithoutReportsInput: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "oauthConnections", "tokens"],
  UserCreateOrConnectWithoutReportsInput: ["where", "create"],
  AttachmentCreateWithoutReportInput: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "post", "creator"],
  AttachmentCreateOrConnectWithoutReportInput: ["where", "create"],
  AttachmentCreateManyReportInputEnvelope: ["data"],
  CommentCreateWithoutReportInput: ["id", "createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "likers"],
  CommentCreateOrConnectWithoutReportInput: ["where", "create"],
  CommentCreateManyReportInputEnvelope: ["data"],
  UserUpsertWithoutReportsInput: ["update", "create"],
  UserUpdateWithoutReportsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "oauthConnections", "tokens"],
  AttachmentUpsertWithWhereUniqueWithoutReportInput: ["where", "update", "create"],
  AttachmentUpdateWithWhereUniqueWithoutReportInput: ["where", "data"],
  AttachmentUpdateManyWithWhereWithoutReportInput: ["where", "data"],
  CommentUpsertWithWhereUniqueWithoutReportInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutReportInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutReportInput: ["where", "data"],
  PostCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "title", "description", "type"],
  CommentCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "body", "postId", "reportId", "edited", "likes"],
  LabelCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "profileId"],
  AttachmentCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId"],
  ReportCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "status"],
  OauthConnectionCreateManyUserInput: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  TokenPairCreateManyUserInput: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "isExpired"],
  PostUpdateWithoutCreatorInput: ["createdAt", "updatedAt", "title", "description", "type", "likers", "comments", "attachments"],
  CommentUpdateWithoutCreatorInput: ["createdAt", "updatedAt", "body", "edited", "likes", "post", "report", "likers"],
  PostUpdateWithoutLikersInput: ["createdAt", "updatedAt", "title", "description", "type", "comments", "attachments", "creator"],
  CommentUpdateWithoutLikersInput: ["createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "report"],
  UserUpdateWithoutFollowersInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "following", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  UserUpdateWithoutFollowingInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "likedComments", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  LabelUpdateWithoutCreatorInput: ["createdAt", "updatedAt", "name", "description", "uses", "profile"],
  AttachmentUpdateWithoutCreatorInput: ["createdAt", "updatedAt", "attachmentUrl", "type", "post", "report"],
  ReportUpdateWithoutCreatorInput: ["createdAt", "updatedAt", "name", "description", "severity", "type", "status", "attachments", "comments"],
  OauthConnectionUpdateWithoutUserInput: ["createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  TokenPairUpdateWithoutUserInput: ["createdAt", "updatedAt", "accessToken", "refreshToken", "isExpired"],
  LabelCreateManyProfileInput: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId"],
  LabelUpdateWithoutProfileInput: ["createdAt", "updatedAt", "name", "description", "uses", "creator"],
  CommentCreateManyPostInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "reportId", "edited", "likes"],
  AttachmentCreateManyPostInput: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "reportId", "creatorId"],
  UserUpdateWithoutLikedPostsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedComments", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  CommentUpdateWithoutPostInput: ["createdAt", "updatedAt", "body", "edited", "likes", "creator", "report", "likers"],
  AttachmentUpdateWithoutPostInput: ["createdAt", "updatedAt", "attachmentUrl", "type", "report", "creator"],
  UserUpdateWithoutLikedCommentsInput: ["createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profile", "posts", "createdComments", "likedPosts", "following", "followers", "createdLabels", "createdAttachments", "reports", "oauthConnections", "tokens"],
  AttachmentCreateManyReportInput: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "creatorId"],
  CommentCreateManyReportInput: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "edited", "likes"],
  AttachmentUpdateWithoutReportInput: ["createdAt", "updatedAt", "attachmentUrl", "type", "post", "creator"],
  CommentUpdateWithoutReportInput: ["createdAt", "updatedAt", "body", "edited", "likes", "creator", "post", "likers"]
};
const outputsInfo = {
  AggregateOauthConnection: ["_count", "_min", "_max"],
  OauthConnectionGroupBy: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId", "_count", "_min", "_max"],
  AggregateTokenPair: ["_count", "_min", "_max"],
  TokenPairGroupBy: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "isExpired", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId", "_count", "_min", "_max"],
  AggregateUserProfile: ["_count", "_min", "_max"],
  UserProfileGroupBy: ["id", "updatedAt", "status", "avatarUrl", "bio", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId", "_count", "_min", "_max"],
  AggregateComment: ["_count", "_avg", "_sum", "_min", "_max"],
  CommentGroupBy: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "reportId", "edited", "likes", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAttachment: ["_count", "_min", "_max"],
  AttachmentGroupBy: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId", "creatorId", "_count", "_min", "_max"],
  AggregateLabel: ["_count", "_avg", "_sum", "_min", "_max"],
  LabelGroupBy: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateReport: ["_count", "_min", "_max"],
  ReportGroupBy: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creatorId", "status", "_count", "_min", "_max"],
  AggregateOrganization: ["_count", "_min", "_max"],
  OrganizationGroupBy: ["id", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateJob: ["_count", "_min", "_max"],
  JobGroupBy: ["id", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateJobApplicant: ["_count", "_min", "_max"],
  JobApplicantGroupBy: ["id", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateShift: ["_count", "_min", "_max"],
  ShiftGroupBy: ["id", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  OauthConnectionCountAggregate: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId", "_all"],
  OauthConnectionMinAggregate: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionMaxAggregate: ["id", "createdAt", "updatedAt", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  TokenPairCountAggregate: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "isExpired", "_all"],
  TokenPairMinAggregate: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "isExpired"],
  TokenPairMaxAggregate: ["id", "createdAt", "updatedAt", "accessToken", "refreshToken", "userId", "isExpired"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId", "_all"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "isLocal", "username", "displayName", "email", "password", "userRole", "profileId"],
  UserProfileCountAggregate: ["id", "updatedAt", "status", "avatarUrl", "bio", "_all"],
  UserProfileMinAggregate: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  UserProfileMaxAggregate: ["id", "updatedAt", "status", "avatarUrl", "bio"],
  PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId", "_all"],
  PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "description", "type", "creatorId"],
  CommentCountAggregate: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "reportId", "edited", "likes", "_all"],
  CommentAvgAggregate: ["likes"],
  CommentSumAggregate: ["likes"],
  CommentMinAggregate: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "reportId", "edited", "likes"],
  CommentMaxAggregate: ["id", "createdAt", "updatedAt", "body", "creatorId", "postId", "reportId", "edited", "likes"],
  AttachmentCountAggregate: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId", "creatorId", "_all"],
  AttachmentMinAggregate: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId", "creatorId"],
  AttachmentMaxAggregate: ["id", "createdAt", "updatedAt", "attachmentUrl", "type", "postId", "reportId", "creatorId"],
  LabelCountAggregate: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId", "_all"],
  LabelAvgAggregate: ["uses"],
  LabelSumAggregate: ["uses"],
  LabelMinAggregate: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  LabelMaxAggregate: ["id", "createdAt", "updatedAt", "name", "description", "uses", "creatorId", "profileId"],
  ReportCountAggregate: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creatorId", "status", "_all"],
  ReportMinAggregate: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creatorId", "status"],
  ReportMaxAggregate: ["id", "createdAt", "updatedAt", "name", "description", "severity", "type", "creatorId", "status"],
  OrganizationCountAggregate: ["id", "createdAt", "updatedAt", "_all"],
  OrganizationMinAggregate: ["id", "createdAt", "updatedAt"],
  OrganizationMaxAggregate: ["id", "createdAt", "updatedAt"],
  JobCountAggregate: ["id", "createdAt", "updatedAt", "_all"],
  JobMinAggregate: ["id", "createdAt", "updatedAt"],
  JobMaxAggregate: ["id", "createdAt", "updatedAt"],
  JobApplicantCountAggregate: ["id", "createdAt", "updatedAt", "_all"],
  JobApplicantMinAggregate: ["id", "createdAt", "updatedAt"],
  JobApplicantMaxAggregate: ["id", "createdAt", "updatedAt"],
  ShiftCountAggregate: ["id", "createdAt", "updatedAt", "_all"],
  ShiftMinAggregate: ["id", "createdAt", "updatedAt"],
  ShiftMaxAggregate: ["id", "createdAt", "updatedAt"]
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
  FindUniqueCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCommentArgs: ["data"],
  CreateManyCommentArgs: ["data"],
  DeleteCommentArgs: ["where"],
  UpdateCommentArgs: ["data", "where"],
  DeleteManyCommentArgs: ["where"],
  UpdateManyCommentArgs: ["data", "where"],
  UpsertCommentArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAttachmentArgs: ["where"],
  FindFirstAttachmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAttachmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAttachmentArgs: ["data"],
  CreateManyAttachmentArgs: ["data"],
  DeleteAttachmentArgs: ["where"],
  UpdateAttachmentArgs: ["data", "where"],
  DeleteManyAttachmentArgs: ["where"],
  UpdateManyAttachmentArgs: ["data", "where"],
  UpsertAttachmentArgs: ["where", "create", "update"],
  AggregateAttachmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAttachmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  GroupByLabelArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueReportArgs: ["where"],
  FindFirstReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateReportArgs: ["data"],
  CreateManyReportArgs: ["data"],
  DeleteReportArgs: ["where"],
  UpdateReportArgs: ["data", "where"],
  DeleteManyReportArgs: ["where"],
  UpdateManyReportArgs: ["data", "where"],
  UpsertReportArgs: ["where", "create", "update"],
  AggregateReportArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByReportArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOrganizationArgs: ["where"],
  FindFirstOrganizationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrganizationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOrganizationArgs: ["data"],
  CreateManyOrganizationArgs: ["data"],
  DeleteOrganizationArgs: ["where"],
  UpdateOrganizationArgs: ["data", "where"],
  DeleteManyOrganizationArgs: ["where"],
  UpdateManyOrganizationArgs: ["data", "where"],
  UpsertOrganizationArgs: ["where", "create", "update"],
  AggregateOrganizationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOrganizationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueJobArgs: ["where"],
  FindFirstJobArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyJobArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateJobArgs: ["data"],
  CreateManyJobArgs: ["data"],
  DeleteJobArgs: ["where"],
  UpdateJobArgs: ["data", "where"],
  DeleteManyJobArgs: ["where"],
  UpdateManyJobArgs: ["data", "where"],
  UpsertJobArgs: ["where", "create", "update"],
  AggregateJobArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByJobArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueJobApplicantArgs: ["where"],
  FindFirstJobApplicantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyJobApplicantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateJobApplicantArgs: ["data"],
  CreateManyJobApplicantArgs: ["data"],
  DeleteJobApplicantArgs: ["where"],
  UpdateJobApplicantArgs: ["data", "where"],
  DeleteManyJobApplicantArgs: ["where"],
  UpdateManyJobApplicantArgs: ["data", "where"],
  UpsertJobApplicantArgs: ["where", "create", "update"],
  AggregateJobApplicantArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByJobApplicantArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueShiftArgs: ["where"],
  FindFirstShiftArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShiftArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateShiftArgs: ["data"],
  CreateManyShiftArgs: ["data"],
  DeleteShiftArgs: ["where"],
  UpdateShiftArgs: ["data", "where"],
  DeleteManyShiftArgs: ["where"],
  UpdateManyShiftArgs: ["data", "where"],
  UpsertShiftArgs: ["where", "create", "update"],
  AggregateShiftArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByShiftArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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







