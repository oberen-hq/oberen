import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateNestedManyWithoutCreatorInput } from "../inputs/AttachmentCreateNestedManyWithoutCreatorInput";
import { CommentCreateNestedManyWithoutCreatorInput } from "../inputs/CommentCreateNestedManyWithoutCreatorInput";
import { CommentCreateNestedManyWithoutLikersInput } from "../inputs/CommentCreateNestedManyWithoutLikersInput";
import { LabelCreateNestedManyWithoutCreatorInput } from "../inputs/LabelCreateNestedManyWithoutCreatorInput";
import { OauthConnectionCreateNestedManyWithoutUserInput } from "../inputs/OauthConnectionCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutCreatorInput } from "../inputs/PostCreateNestedManyWithoutCreatorInput";
import { PostCreateNestedManyWithoutLikersInput } from "../inputs/PostCreateNestedManyWithoutLikersInput";
import { ReportCreateNestedManyWithoutCreatorInput } from "../inputs/ReportCreateNestedManyWithoutCreatorInput";
import { TokenPairCreateNestedManyWithoutUserInput } from "../inputs/TokenPairCreateNestedManyWithoutUserInput";
import { UserCreateNestedManyWithoutFollowersInput } from "../inputs/UserCreateNestedManyWithoutFollowersInput";
import { UserProfileCreateNestedOneWithoutUserInput } from "../inputs/UserProfileCreateNestedOneWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutFollowersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isLocal?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "user" | "staff" | "admin" | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutUserInput, {
    nullable: false
  })
  profile!: UserProfileCreateNestedOneWithoutUserInput;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  createdComments?: CommentCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutLikersInput, {
    nullable: true
  })
  likedPosts?: PostCreateNestedManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutLikersInput, {
    nullable: true
  })
  likedComments?: CommentCreateNestedManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserCreateNestedManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => LabelCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  createdLabels?: LabelCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  createdAttachments?: AttachmentCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  reports?: ReportCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => OauthConnectionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  oauthConnections?: OauthConnectionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TokenPairCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  tokens?: TokenPairCreateNestedManyWithoutUserInput | undefined;
}
