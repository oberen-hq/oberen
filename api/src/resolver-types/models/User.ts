import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Label } from "../models/Label";
import { OauthConnection } from "../models/OauthConnection";
import { Post } from "../models/Post";
import { PostComment } from "../models/PostComment";
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

  profile?: UserProfile | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profileId?: string | null;

  posts?: Post[];

  createdComments?: PostComment[];

  likedPosts?: Post[];

  likedComments?: PostComment[];

  createdLabels?: Label[];

  oauthConnections?: OauthConnection[];

  tokens?: TokenPair[];
}
