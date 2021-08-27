import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Attachment } from "../models/Attachment";
import { Comment } from "../models/Comment";
import { Label } from "../models/Label";
import { OauthConnection } from "../models/OauthConnection";
import { Post } from "../models/Post";
import { Report } from "../models/Report";
import { TokenPair } from "../models/TokenPair";
import { UserProfile } from "../models/UserProfile";
import { Role } from "../enums/Role";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isLocal!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  userRole?: "user" | "staff" | "admin" | null;

  profile?: UserProfile;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  profileId!: string;

  posts?: Post[];

  createdComments?: Comment[];

  likedPosts?: Post[];

  likedComments?: Comment[];

  following?: User[];

  followers?: User[];

  createdLabels?: Label[];

  createdAttachments?: Attachment[];

  reports?: Report[];

  oauthConnections?: OauthConnection[];

  tokens?: TokenPair[];
}
